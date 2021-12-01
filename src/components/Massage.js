import { Avatar } from "@material-ui/core";
import React from "react";
import "../styles/Massage.css";

const Massage = () => {
  return (
    <div className="massage">
      <Avatar />
      <div className="massage__info">
        <h4>
          Abdur Nour Tanim
          <span className="massage__timestamp">this is for timestamp</span>
        </h4>

        <p>This is a massage</p>
      </div>
    </div>
  );
};

export default Massage;
