import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../firebase";
import classes from "../styles/Login.module.css";

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err));
  };

  return (
    <div className={classes.login}>
      <div className={classes.login__logo}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpd9Djb3C2ADbuP3U5BROPxog1-2DLuFEgop6hhy7MdMtNIdn-Fag4x5oAVXMR2Fu6AMI&usqp=CAU"
          alt="DISCORD_LOGO"
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
};

export default Login;
