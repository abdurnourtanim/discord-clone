import { Avatar } from "@material-ui/core";
import React from "react";
import "../styles/Massage.css";

const Massage = ({ timestamp, massage, user }) => {
  return (
    <div className="massage">
      <Avatar src={user.photo} />
      <div className="massage__info">
        <h4>
          {user.displayName}
          <span className="massage__timestamp">
            {new Date(timestamp?.toDate()).toLocaleTimeString("en-us")}
          </span>
        </h4>

        <p>{massage}</p>
      </div>
    </div>
  );
};

export default Massage;
