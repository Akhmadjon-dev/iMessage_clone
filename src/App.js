import React, { useEffect } from "react";
import Imessage from "./components/Imessage/Imessage";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import Login from "./components/Login/login";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        /// login in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            name: authUser.displayName,
          })
        );
      } else {
        //  logout
        dispatch(logout());
      }
    });
  }, []);
  return <div className="app">{user ? <Imessage /> : <Login />}</div>;
}

export default App;
