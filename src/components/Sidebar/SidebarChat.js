import { Avatar } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { setChat } from "../../features/chatSlice";
import "./Sidebar.css";
const SidebarChat = ({ id, data }) => {
  console.log(id, data);
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
        <span className="sidebarChat__message">Last message here</span>
        <span className="sidebarChat__time">17/11/20 19:38</span>
      </div>
    </div>
  );
};

export default SidebarChat;
