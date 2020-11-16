import { IconButton } from "@material-ui/core";
import { MicNoneOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import "./Chat.css";

const Chat = () => {
  const [message, setMessage] = useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
    setMessage("");
  };
  return (
    <div className="chat">
      {/* chat header  */}
      <div className="chat__header">
        <h4>
          To: <span>kimga borishi</span>{" "}
        </h4>
        <strong>Details</strong>
      </div>
      {/* chat section */}
      <div className="chat__message">
        <h1>chat message</h1>
      </div>

      {/* chat input */}
      <div className="chat__input">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="iMessage here"
            value={message}
          />
          <button>Send</button>
        </form>
        <IconButton>
          <MicNoneOutlined />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
