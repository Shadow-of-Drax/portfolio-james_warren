import React from "react";
import myphoto from "../components/media/James.jpg"; // Import the image

const Picture = () => {
  return (
    <div className="picture">
      <h1>My Profile</h1>
      <img src={myphoto} alt="My Profile" className="profile-picture" />
    </div>
  );
};

export default Picture;
