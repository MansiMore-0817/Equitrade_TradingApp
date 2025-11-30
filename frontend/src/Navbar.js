import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dashboardUrl = process.env.REACT_APP_DASHBOARD_URL || 'http://localhost:3000';

  useEffect(() => {
    // Check if user is logged in by checking for token in localStorage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  return (
   
      <nav className="navbar navbar-expand-lg" style={{
        backgroundColor: "#ffffff",
        padding: "0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        minHeight: "70px"
      }}>
        <div className="container-fluid" style={{ padding: "0 30px" }}>
          <Link className="navbar-brand" to="/" style={{ 
            display: "flex", 
            alignItems: "center",
            padding: "15px 0"
          }}>
            <img src="images/newLogo.png" alt="logo" style={{width: "180px", height: "auto"}}/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              border: "none",
              padding: "8px 12px"
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0" style={{ 
              paddingRight: "0",
              alignItems: "center",
              gap: "8px"
            }}>
              {isLoggedIn ? (
                <li className="nav-item">
                  <a 
                    className="nav-link" 
                    href={dashboardUrl}
                    style={{ 
                      color: "#667eea", 
                      fontWeight: "600",
                      fontSize: "16px",
                      padding: "12px 20px",
                      borderRadius: "6px",
                      transition: "all 0.2s",
                      margin: "0 4px"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#f0f4ff";
                      e.target.style.color = "#5568d3";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#667eea";
                    }}
                  >
                    Dashboard
                  </a>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link 
                      className="nav-link" 
                      to="/login"
                      style={{
                        color: "#333",
                        fontSize: "16px",
                        fontWeight: "500",
                        padding: "12px 20px",
                        borderRadius: "6px",
                        transition: "all 0.2s",
                        margin: "0 4px"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#f5f5f5";
                        e.target.style.color = "#667eea";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "transparent";
                        e.target.style.color = "#333";
                      }}
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      className="nav-link" 
                      to="/signup"
                      style={{
                        color: "#ffffff",
                        backgroundColor: "#667eea",
                        fontSize: "16px",
                        fontWeight: "600",
                        padding: "12px 24px",
                        borderRadius: "6px",
                        transition: "all 0.2s",
                        margin: "0 4px"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#5568d3";
                        e.target.style.transform = "translateY(-1px)";
                        e.target.style.boxShadow = "0 4px 8px rgba(102, 126, 234, 0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#667eea";
                        e.target.style.transform = "translateY(0)";
                        e.target.style.boxShadow = "none";
                      }}
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  to="/about"
                  style={{
                    color: "#333",
                    fontSize: "16px",
                    fontWeight: "500",
                    padding: "12px 20px",
                    borderRadius: "6px",
                    transition: "all 0.2s",
                    margin: "0 4px"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#f5f5f5";
                    e.target.style.color = "#667eea";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#333";
                  }}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  to="/products"
                  style={{
                    color: "#333",
                    fontSize: "16px",
                    fontWeight: "500",
                    padding: "12px 20px",
                    borderRadius: "6px",
                    transition: "all 0.2s",
                    margin: "0 4px"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#f5f5f5";
                    e.target.style.color = "#667eea";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#333";
                  }}
                >
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  to="/pricing"
                  style={{
                    color: "#333",
                    fontSize: "16px",
                    fontWeight: "500",
                    padding: "12px 20px",
                    borderRadius: "6px",
                    transition: "all 0.2s",
                    margin: "0 4px"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#f5f5f5";
                    e.target.style.color = "#667eea";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#333";
                  }}
                >
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  to="/support"
                  style={{
                    color: "#333",
                    fontSize: "16px",
                    fontWeight: "500",
                    padding: "12px 20px",
                    borderRadius: "6px",
                    transition: "all 0.2s",
                    margin: "0 4px"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#f5f5f5";
                    e.target.style.color = "#667eea";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#333";
                  }}
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
  );
}

export default Navbar;
