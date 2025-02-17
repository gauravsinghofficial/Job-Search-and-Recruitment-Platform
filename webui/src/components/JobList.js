import React, { useEffect, useState } from "react";
import axios from "axios";
import "./JobList.css";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "http://localhost:5000/api/jobs",
          {},
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        setJobs(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching jobs.");
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <p>Loading jobs...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="job-list">
      <h2 className="job-list-title">Job Listings</h2>
      <ul className="job-list-items">
        {jobs.length === 0 ? (
          <li className="job-list-empty">No jobs available</li>
        ) : (
          jobs.map((job) => (
            <li key={job._id} className="job-list-item">
              <h3 className="job-list-item-title">{job.title}</h3>
              <p className="job-list-item-company">{job.company}</p>
              <p className="job-list-item-location">{job.location}</p>
              <a href={`/jobs/${job._id}`} className="job-list-item-link">
                View Details
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default JobList;
