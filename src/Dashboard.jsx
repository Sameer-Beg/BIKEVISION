import React, { useState } from "react";
import { FaChartBar, FaMapMarkedAlt, FaDatabase, FaBatteryHalf, FaTools, FaCogs, FaPalette, FaWifi, FaHome, FaUserCircle } from "react-icons/fa";
import "./Dashboard.css";

export default function Dashboard() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <div className="dashboard-container">
      
      {/* Header */}
      <div className="header">
        <h1>BikeVision</h1>
        <div className="profile-section">
          <FaUserCircle size={24} onClick={() => setShowProfileMenu(!showProfileMenu)} className="profile-icon" />
          {showProfileMenu && (
            <div className="profile-dropdown">
              <button>My Account</button>
              <button>Profile</button>
              <button>Settings</button>
              <button>Log out</button>
            </div>
          )}
        </div>
      </div>

      <div className="dashboard-body">
        {/* Sidebar */}
        <div className="sidebar">
          <button className="menu-btn active">Dashboard</button>
          <button className="menu-btn">Analytics</button>
          <button className="menu-btn">Live Tracking</button>
          <button className="menu-btn">Raw Data</button>
          <button className="menu-btn">Battery Status</button>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <h2>Fleet Overview</h2>

          <div className="overview-cards">
            <div className="card">
              <p className="count">0</p>
              <p>Total Devices</p>
            </div>
            <div className="card">
              <p className="count">0</p>
              <p>Online</p>
            </div>
            <div className="card">
              <p className="count">0%</p>
              <p>Avg Battery</p>
            </div>
            <div className="card">
              <p className="count">0%</p>
              <p>Utilization</p>
            </div>
          </div>

          <div className="map-placeholder">
            Live Fleet Location (Map Here)
          </div>
        </div>
      </div>
    </div>
  );
}