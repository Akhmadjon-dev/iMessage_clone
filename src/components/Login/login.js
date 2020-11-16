import { Button } from "@material-ui/core";
import React from "react";
import logo from "../../assets/imessage.png";
import { auth, provider } from "../../firebase";
import "./Login.css";
const login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src={logo} alt="login rasm" />
        <h1>iMessage</h1>
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
};

export default login;
