import React from "react";
import JobList from "../components/JobList";
import "./Jobs.css";

const Jobs = () => {
  return (
    <div className="jobs-container">
      <h2 className="jobs-title">Available Jobs</h2>
      <JobList />
    </div>
  );
};

export default Jobs;
