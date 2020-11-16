import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
const SidebarChat = ({ id, chatName }) => {
  return (
    <div className="sidebarChat">
      <Avatar className="sidebarChat__avatar" />
      <div className="sidebarChat__info">
        <h3 className="sidebarChat__name">{chatName}</h3>
        <span className="sidebarChat__message">Last message here</span>
        <span className="sidebarChat__time">17/11/20 19:38</span>
      </div>
    </div>
  );
};

export default SidebarChat;
