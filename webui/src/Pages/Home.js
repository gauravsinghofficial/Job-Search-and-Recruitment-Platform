import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="home-title">Welcome to the Job Search Platform</h2>

      <div className="home-links">
        <Link to="/jobs">View Jobs</Link>
        <Link to="/profile">View Profile</Link>
      </div>
    </div>
  );
};

export default Home;
