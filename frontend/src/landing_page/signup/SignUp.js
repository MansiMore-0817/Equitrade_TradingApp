import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setError('');

        // Validation
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters long');
            setLoading(false);
            return;
        }

        try {
            const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3002';
            const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL || 'http://localhost:3000';
            
            const response = await axios.post(`${API_URL}/register`, {
                username: formData.username,
                email: formData.email,
                password: formData.password
            });

            if (response.data.success) {
                // Store token and user data
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                
                setMessage('Account created successfully! Redirecting to dashboard...');
                
                // Redirect to dashboard after 2 seconds
                setTimeout(() => {
                    window.location.href = DASHBOARD_URL;
                }, 2000);
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Registration failed';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
        }}>
            <div style={{
                background: 'white',
                padding: '40px',
                borderRadius: '10px',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                width: '100%',
                maxWidth: '500px'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <h1 style={{ 
                        color: '#333', 
                        marginBottom: '10px',
                        fontSize: '28px',
                        fontWeight: '300'
                    }}>
                        Join EquiTrade
                    </h1>
                    <p style={{ color: '#666', fontSize: '16px' }}>
                        Create your account and start trading
                    </p>
                </div>

                {message && (
                    <div style={{
                        padding: '12px',
                        borderRadius: '5px',
                        marginBottom: '20px',
                        backgroundColor: '#d4edda',
                        color: '#155724',
                        border: '1px solid #c3e6cb'
                    }}>
                        {message}
                    </div>
                )}

                {error && (
                    <div style={{
                        padding: '12px',
                        borderRadius: '5px',
                        marginBottom: '20px',
                        backgroundColor: '#f8d7da',
                        color: '#721c24',
                        border: '1px solid #f5c6cb'
                    }}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ 
                            display: 'block', 
                            marginBottom: '5px', 
                            color: '#333',
                            fontSize: '14px',
                            fontWeight: '500'
                        }}>
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '12px',
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                                fontSize: '16px',
                                boxSizing: 'border-box'
                            }}
                            placeholder="Choose a username"
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ 
                            display: 'block', 
                            marginBottom: '5px', 
                            color: '#333',
                            fontSize: '14px',
                            fontWeight: '500'
                        }}>
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '12px',
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                                fontSize: '16px',
                                boxSizing: 'border-box'
                            }}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ 
                            display: 'block', 
                            marginBottom: '5px', 
                            color: '#333',
                            fontSize: '14px',
                            fontWeight: '500'
                        }}>
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '12px',
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                                fontSize: '16px',
                                boxSizing: 'border-box'
                            }}
                            placeholder="Create a password"
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ 
                            display: 'block', 
                            marginBottom: '5px', 
                            color: '#333',
                            fontSize: '14px',
                            fontWeight: '500'
                        }}>
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '12px',
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                                fontSize: '16px',
                                boxSizing: 'border-box'
                            }}
                            placeholder="Confirm your password"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            width: '100%',
                            padding: '12px',
                            background: loading ? '#ccc' : '#667eea',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            fontSize: '16px',
                            fontWeight: '500',
                            cursor: loading ? 'not-allowed' : 'pointer',
                            transition: 'background-color 0.3s'
                        }}
                        onMouseOver={(e) => {
                            if (!loading) e.target.style.backgroundColor = '#5a67d8';
                        }}
                        onMouseOut={(e) => {
                            if (!loading) e.target.style.backgroundColor = '#667eea';
                        }}
                    >
                        {loading ? 'Creating Account...' : 'Create Account'}
                    </button>
                </form>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <p style={{ color: '#666', fontSize: '14px' }}>
                        Already have an account?{' '}
                        <a 
                            href="/dashboard" 
                            style={{ color: '#667eea', textDecoration: 'none' }}
                        >
                            Sign In
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;