import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService.js";
import "../css/login.css";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginUser(phone, password);

      // store user in localStorage
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/home");
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>🏏 Aryabhata Cricket Lovers</h2>
        <p className="subtitle">Group Login</p>

        {error && <p className="error">{error}</p>}

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        <p className="hint">
          Password is same for all group members 😉
        </p>
      </form>
    </div>
  );
};

export default Login;
