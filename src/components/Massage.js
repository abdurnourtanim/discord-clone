import { Avatar } from "@material-ui/core";
import React from "react";
import classes from "../styles/Massage.module.css";

const Massage = ({ timestamp, massage, user }) => {
  return (
    <div className={classes.massage}>
      <Avatar src={user.photo} />
      <div className={classes.massage__info}>
        <h4>
          {user.displayName}
          <span className={classes.massage__timestamp}>
            {new Date(timestamp?.toDate()).toLocaleString()}
          </span>
        </h4>

        <p>{massage}</p>
      </div>
    </div>
  );
};

export default Massage;
