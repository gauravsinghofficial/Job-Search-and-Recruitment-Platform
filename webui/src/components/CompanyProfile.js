import React from "react";
import "./CompanyProfile.css";

const CompanyProfile = ({ company }) => {
  return (
    <div className="company-profile">
      <h2 className="company-name">{company.name}</h2>
      <p className="company-description">{company.description}</p>
      <p className="company-location">{company.location}</p>
    </div>
  );
};

export default CompanyProfile;
