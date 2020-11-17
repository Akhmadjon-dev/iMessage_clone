import { Avatar, IconButton } from "@material-ui/core";
import { RateReviewOutlined, SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import db, { auth } from "../../firebase";
const Sidebar = () => {
  const [chats, setChats] = useState([]);
  const user = useSelector(selectUser);
  useEffect(() => {
    db.collection("chats").onSnapshot((snapshot) => {
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  const addChat = () => {
    const name = prompt("please enter chat name");
    db.collection("chats").add({
      chatName: name,
    });
  };
  const signOutHandler = () => {
    
    auth.signOut();

  };
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar
          onClick={signOutHandler}
          src={user.photo}
          className="sidebar__avatar"
        />
        <div className="sidebar__input">
          <SearchOutlined />
          <input type="text" placeholder="Search" />
        </div>
        <IconButton onClick={addChat} className="sidebar__inputButton">
          <RateReviewOutlined />
        </IconButton>
      </div>
      <div className="sidebar__chats">
        {chats.map(({ id, data: { chatName } }) => (
          <SidebarChat key={id} id={id} data={chatName} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
