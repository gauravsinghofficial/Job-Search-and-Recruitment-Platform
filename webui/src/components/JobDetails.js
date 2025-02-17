import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./JobDetails.css";

const API_BASE_URL = "https://job-search-and-recruitment-platform.onrender.com";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    console.log("this is being called");
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/users/jobs/${id}`
        );
        setJob(response.data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };
    fetchJobDetails();
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div className="job-details">
      <h2 className="job-title">{job.title}</h2>
      <p className="job-company">
        <strong>Company:</strong> {job.company}
      </p>
      <p className="job-location">
        <strong>Location:</strong> {job.location}
      </p>
      <p className="job-description">
        <strong>Description:</strong> {job.description}
      </p>
    </div>
  );
};

export default JobDetails;
