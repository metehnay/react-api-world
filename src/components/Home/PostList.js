import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { MainContext, useContext } from "../Context";
import clock from "./clock.svg";
const PostList = ({ post, addFavorite, removeFavourites, isAuth }) => {
  const { linkin, title, imageURL, photoURL, name, id, ms, onoff } = post;

  const [hover, setHover] = useState(false);

  const { loads, setLoads } = useContext(MainContext);
  const log = useNavigate();
  const loginNav = () => {
    log("/login");
  };
  return (
    <>
      <div>
        <div
          className="post"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div className="postimage">
            <div className="del"></div>
            <div className={onoff ? "images disable" : "images"}>
              <a href={linkin}>
                <p className="ss">
                  {title}{" "}
                  {onoff ? (
                    <i className="status1"></i>
                  ) : (
                    <i className="status"></i>
                  )}
                </p>

                <img src={imageURL} id="img-photo" />
              </a>
              <div className="uploader">
                <img
                  src={
                    photoURL
                      ? photoURL
                      : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                  }
                />

                <p>by {name ? `${name}` : "Anonymous"}</p>
              </div>
              <div className="flexo">
                <div className="demo">
                  {onoff ? (
                    <button className="demos opacity-25">View Demo</button>
                  ) : (
                    <a href={linkin}>
                      {" "}
                      <button className="demos">View Demo</button>
                    </a>
                  )}
                </div>
                {addFavorite && (
                  <div className="butons">
                    <button
                      onClick={
                        isAuth ? () => addFavorite(id) : () => loginNav(id)
                      }
                      id="favori"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          {hover && (
            <>
              <h5 className="ms">
                {" "}
                <img src={clock} id="svg" />
                {ms} ms
              </h5>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PostList;
