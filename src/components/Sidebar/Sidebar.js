import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { signOut } from "firebase/auth";
import lock from "./lock.svg";
import background from "./background.png";

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
        {isAuth && (
          <Link to="/favorites" className="favorites">
            Favorites
          </Link>
        )}
        <div className="exe mt-4">
          <img src={background} className="homepage" />
          <div className="explore">
            <h2>
              <Link to="/">HOMEPAGE</Link>
            </h2>
          </div>
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
                Chuck Norris API
              </Link>
            </li>
            <li>
              <Link to="/randomuser" className="kat">
                Random User API
              </Link>
            </li>
            <li>
              <Link to="/cocktails" className="kat">
                Cocktails API
              </Link>
            </li>
            <li>
              <Link to="/pokemon" className="kat">
                Pokemon API
              </Link>
            </li>
            <li>
              <Link to="/catfacts" className="kat">
                Cat Facts API
              </Link>
            </li>
            <li>
              <Link to="/valorant" className="kat">
                Valorant API
              </Link>
            </li>
            <li>
              <Link to="/recipes" className="kat">
                Recipes API
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
