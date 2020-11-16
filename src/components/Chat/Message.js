import { Avatar } from "@material-ui/core";
import React from "react";
import "./Chat.css";
const Message = ({ id, content }) => {
  return (
    <div className="message">
      <Avatar />
      <p>This is message</p>
      <small>time stamp</small>
    </div>
  );
};

export default Message;
