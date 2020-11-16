import { Avatar, IconButton } from "@material-ui/core";
import { RateReviewOutlined, SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar className="sidebar__avatar" />
        <div className="sidebar__input">
          <SearchOutlined />
          <input type="text" placeholder="Search" />
        </div>
        <IconButton className="sidebar__inputButton">
          <RateReviewOutlined />
        </IconButton>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
