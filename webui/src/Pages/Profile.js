import React from "react";
import UserProfile from "../components/UserProfile";
import "./Profile.css";

const Profile = () => {
  const user = {
    name: "Gaurav Singh",
    email: "gauravsinghgzp83@gmail.com",
    experience: "3 years",
    location: "New Delhi",
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">Your Profile</h2>
      <UserProfile user={user} />
    </div>
  );
};

export default Profile;
