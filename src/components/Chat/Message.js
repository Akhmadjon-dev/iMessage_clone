import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./Chat.css";
const Message = forwardRef(
  ({ id, content: { timestamp, uid, name, photo, email, message } }, ref) => {
    const user = useSelector(selectUser);
    return (
      <div
        ref={ref}
        className={`message ${email === user.email && "message__sender"} `}
      >
        <Avatar className="message__photo" src={photo} />
        <p>{message}</p>
        <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
      </div>
    );
  }
);

export default Message;
