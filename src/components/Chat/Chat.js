import { IconButton } from "@material-ui/core";
import { MicNoneOutlined } from "@material-ui/icons";
import Message from "./Message";
import React, { useState } from "react";
import "./Chat.css";

const Chat = () => {
  const [input, setInput] = useState(null);
  const [message, setMessage] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setInput("");
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
        <Message />
      </div>

      {/* chat input */}
      <div className="chat__input">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            placeholder="iMessage here"
            value={input}
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
