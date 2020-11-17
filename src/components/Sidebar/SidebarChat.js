import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setChat } from "../../features/chatSlice";
import db from "../../firebase";
import * as timeago from "timeago.js";
import "./Sidebar.css";
const SidebarChat = ({ id, data }) => {
  console.log(id, data);
  const [chatInfo, setChatInfo] = useState([]);
  useEffect(() => {
    db.collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setChatInfo(snapshot.docs.map((doc) => doc.data()))
      );
  }, [id]);
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(
          setChat({
            chatId: id,
            chatName: data,
          })
        );
      }}
      className="sidebarChat"
    >
      <Avatar className="sidebarChat__avatar" />
      <div className="sidebarChat__info">
        <h3 className="sidebarChat__name">{data}</h3>
        <span className="sidebarChat__message">{chatInfo[0]?.message}</span>
        <span className="sidebarChat__time">
          {timeago.format(new Date(chatInfo[0]?.timestamp?.toDate()))}
        </span>
      </div>
    </div>
  );
};

export default SidebarChat;
