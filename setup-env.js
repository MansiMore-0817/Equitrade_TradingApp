#!/usr/bin/env node

/**
 * Environment Variables Setup Script
 * This script creates .env files from .env.example templates
 */

const fs = require('fs');
const path = require('path');

const envFiles = [
  {
    source: 'backend/.env.example',
    target: 'backend/.env',
    description: 'Backend environment variables'
  },
  {
    source: 'frontend/.env.example',
    target: 'frontend/.env',
    description: 'Frontend environment variables'
  },
  {
    source: 'dashboard/.env.example',
    target: 'dashboard/.env',
    description: 'Dashboard environment variables'
  }
];

console.log('🚀 Setting up environment variables...\n');

envFiles.forEach(({ source, target, description }) => {
  const sourcePath = path.join(__dirname, source);
  const targetPath = path.join(__dirname, target);

  // Check if .env.example exists
  if (!fs.existsSync(sourcePath)) {
    console.log(`⚠️  ${source} not found. Creating template...`);
    
    // Create directory if it doesn't exist
    const targetDir = path.dirname(targetPath);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // Create template based on which file it is
    let template = '';
    if (source.includes('backend')) {
      template = `# Backend Environment Variables
PORT=3002
MONGO_URL=mongodb://localhost:27017/equitrade
JWT_SECRET=your-secret-key-here-change-this-in-production
FRONTEND_URL=http://localhost:3001
DASHBOARD_URL=http://localhost:3000
`;
    } else if (source.includes('frontend')) {
      template = `# Frontend Environment Variables
REACT_APP_API_URL=http://localhost:3002
REACT_APP_DASHBOARD_URL=http://localhost:3000
`;
    } else if (source.includes('dashboard')) {
      template = `# Dashboard Environment Variables
REACT_APP_API_URL=http://localhost:3002
REACT_APP_FRONTEND_URL=http://localhost:3001
`;
    }
    
    fs.writeFileSync(sourcePath, template);
    console.log(`✅ Created ${source}`);
  }

  // Check if .env already exists
  if (fs.existsSync(targetPath)) {
    console.log(`⏭️  ${target} already exists. Skipping...`);
    return;
  }

  // Copy .env.example to .env
  try {
    const content = fs.readFileSync(sourcePath, 'utf8');
    fs.writeFileSync(targetPath, content);
    console.log(`✅ Created ${target} (${description})`);
  } catch (error) {
    console.error(`❌ Error creating ${target}:`, error.message);
  }
});

console.log('\n✨ Environment setup complete!');
console.log('\n📝 Next steps:');
console.log('1. Edit backend/.env and set your MONGO_URL and JWT_SECRET');
console.log('2. Update frontend/.env and dashboard/.env if using different ports');
console.log('3. Never commit .env files to git (they are in .gitignore)');
console.log('\n💡 Tip: Generate a secure JWT_SECRET using:');
console.log('   Windows: [Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))');
console.log('   Mac/Linux: openssl rand -base64 32\n');

