import React from "react";
import "./Picture.css";

const picture = (props) => {
  return (
    <div className="Picture">
      <img src={props.image} alt="James" />
    </div>
  );
};

export default picture;
