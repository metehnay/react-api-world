import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { signOut } from "firebase/auth";
import lock from "./lock.svg";

import { auth, useAuth, upload } from "../../firebase";
import ChuckNorris from "../ListAPI/ChuckNorris/ChuckNorris";

const Sidebar = ({ isAuth, setIsAuth }) => {
  const currentUser = useAuth();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/";
    });
  };
  return (
    <>
      <div className="side">
        <div className="login">
          {!isAuth ? (
            <Link to="/login" className="middle">
              Log In
            </Link>
          ) : (
            <>
              {currentUser?.photoURL ? (
                <img src={currentUser?.photoURL} className="avatar" />
              ) : (
                <img
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                  }
                  className="avatar"
                />
              )}

              <li onClick={signUserOut} id="log">
                Log Out
              </li>
            </>
          )}
        </div>
        {isAuth ? (
          <h3 className="m-4">API LIST</h3>
        ) : (
          <p className="m-3">You must be signed in to see API list.</p>
        )}
        <div className={isAuth ? "category" : "blur"}>
          <div className="categories m-2 p-4">
            <li>
              <Link to="/chucknorris" className="kat">
                Chuck Norris
              </Link>
            </li>
            <li>
              <Link to="/chucknorris" className="kat">
                Dad Jokes
              </Link>
            </li>
            <li>
              <Link to="/chucknorris" className="kat">
                Rapid Maps
              </Link>
            </li>
            {!isAuth && <img src={lock} id="lock" />}
          </div>
        </div>
      </div>
      <div className="norris"></div>
    </>
  );
};

export default Sidebar;
