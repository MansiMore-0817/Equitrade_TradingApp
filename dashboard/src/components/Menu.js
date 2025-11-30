import React, { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };

    if (isProfileDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileDropdownOpen]);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "60px", height: "auto" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: " none" }}
              to={"/"}
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === "0" ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: " none" }}
              to={"/orders"}
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === "1" ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: " none" }}
              to={"/holdings"}
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === "2" ? activeMenuClass : menuClass}>
              Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: " none" }}
              to={"/positions"}
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === "3" ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: " none" }}
              to={"/funds"}
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === "4" ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: " none" }}
              to={"/apps"}
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === "5" ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick} ref={dropdownRef} style={{ position: 'relative' }}>
          <div className="avatar">
            {user ? user.username.charAt(0).toUpperCase() : 'U'}
          </div>
          <p className="username">{user ? user.username : 'USER'}</p>
        
        {isProfileDropdownOpen && (
          <div style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: '0',
            background: 'white',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            zIndex: 1000,
            minWidth: '200px'
          }}>
            <div style={{ 
              padding: '16px', 
              borderBottom: '1px solid #f0f0f0',
              background: '#fafafa'
            }}>
              <p style={{ 
                margin: 0, 
                fontSize: '13px', 
                color: '#999',
                marginBottom: '4px'
              }}>
                Signed in as
              </p>
              <p style={{ 
                margin: 0, 
                fontSize: '15px', 
                color: '#333',
                fontWeight: '500'
              }}>
                {user ? user.email : 'user@example.com'}
              </p>
            </div>
            <button
              onClick={() => {
                setIsProfileDropdownOpen(false);
                logout();
              }}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: 'none',
                background: 'none',
                textAlign: 'left',
                cursor: 'pointer',
                fontSize: '15px',
                color: '#d32f2f',
                fontWeight: '500',
                transition: 'background 0.2s'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#ffebee';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'none';
              }}
            >
              Logout
            </button>
          </div>
        )}
        </div>
        
      </div>
    </div>
  );
};

export default Menu;
