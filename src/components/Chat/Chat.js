import { IconButton } from "@material-ui/core";
import { MicNoneOutlined } from "@material-ui/icons";
import Message from "./Message";
import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useSelector } from "react-redux";
import { selectChatId, selectChatName } from "../../features/chatSlice";
import db from "../../firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import { selectUser } from "../../features/userSlice";
const Chat = () => {
  const [input, setInput] = useState(null);
  const [message, setMessage] = useState([]);
  const chatName = useSelector(selectChatName);
  const chatId = useSelector(selectChatId);
  const user = useSelector(selectUser);
  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessage(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
              //   {
              //     ...doc.data(),
              //     uid: user.uid,
              //     photo: user.photo,
              //     name: user.name,
              //     email: user.email,
              //   },
            }))
          )
        );
    }
  }, [input]);
  const submitHandler = (e) => {
    e.preventDefault();
    db.collection("chats").doc(chatId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      uid: user.uid,
      photo: user.photo,
      name: user.name,
      email: user.email,
    });
    setInput("");
  };
  console.log(message);
  return (
    <div className="chat">
      {/* chat header  */}
      <div className="chat__header">
        <h4>
          To: <span>{chatName}</span>{" "}
        </h4>
        <strong>Details</strong>
      </div>
      {/* chat section */}
      <div className="chat__message">
        <FlipMove>
          {message.map(({ id, data }) => (
            <Message key={id} id={id} content={data} />
          ))}
        </FlipMove>
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
