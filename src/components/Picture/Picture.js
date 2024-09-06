import React from "react";
import James from "../components/media/James.jpg"; // Import the image

const Picture = () => {
  return (
    <div className="picture">
      <h1>My Profile</h1>
      <img src={James} alt="My Profile" className="profile-picture" />
    </div>
  );
};

export default Picture;
