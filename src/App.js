import React from "react";
import { Counter } from "./features/counterSlice";
import Imessage from "./components/Imessage/Imessage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Imessage />
    </div>
  );
}

export default App;
