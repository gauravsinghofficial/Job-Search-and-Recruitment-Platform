import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const API_BASE_URL = "https://job-search-and-recruitment-platform.onrender.com";

const Register = ({ setAuthToken }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("seeker");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(`${API_BASE_URL}/api/users/register`, {
        name,
        email,
        password,
        role,
      });

      localStorage.setItem("token", response.data.token);
      setAuthToken(response.data.token);

      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      setError("Error registering.");
      console.error("Register error:", err);
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      {error && <p className="register-error">{error}</p>}
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="register-input"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="register-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="register-input"
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="register-input"
        >
          <option value="seeker">Seeker</option>
          <option value="recruiter">Recruiter</option>
        </select>

        <button type="submit" className="register-button">
          Register
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <a href="/login" className="login-link">
          Login here
        </a>
      </p>
    </div>
  );
};

export default Register;
