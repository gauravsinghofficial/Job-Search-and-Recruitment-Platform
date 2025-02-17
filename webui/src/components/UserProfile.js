import React from "react";
import "./UserProfile.css";

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile-container">
      <h2>{user.name}</h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Experience:</strong> {user.experience}
      </p>
      <p>
        <strong>Location:</strong> {user.location}
      </p>
    </div>
  );
};

export default UserProfile;
