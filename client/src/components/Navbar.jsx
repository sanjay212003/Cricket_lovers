import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const rawUser = localStorage.getItem("user");
  const user = rawUser ? JSON.parse(rawUser) : null;

  // 🚫 Hide navbar before login
  if (!user) return null;

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => navigate("/home")}>
        🏏 Aryabhata
      </div>

      {/* 🔹 Optional welcome text */}
      <div className="nav-welcome">
        Welcome, <strong>{user.name}</strong>
      </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/home" onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/members" onClick={closeMenu}>
          Members
        </NavLink>

        {/* 🔥 Register ➜ Party */}
        <NavLink to="/register" onClick={closeMenu}>
          Party
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
};

export default Navbar;
