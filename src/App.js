import React from "react";
import Imessage from "./components/Imessage/Imessage";
import "./App.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      {user ? <Imessage /> : <h2>You need to login</h2>}
    </div>
  );
}

export default App;
