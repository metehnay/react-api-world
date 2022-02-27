import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const PostList = ({ post, addFavorite, removeFavourites, isAuth }) => {
  const { linkin, title, imageURL, photoURL, name, id } = post;

  const log = useNavigate();
  const loginNav = () => {
    log("/login");
  };
  return (
    <>
      <div>
        <div className="post">
          <div className="postimage">
            <div className="del"></div>

            <div className="images">
              <a href={linkin}>
                <p className="ss">
                  {title} <i className="status"></i>
                </p>

                <img src={imageURL} id="img-photo" />
              </a>
              <div className="uploader">
                <img src={photoURL} />

                <p>by {name} </p>
              </div>
              <div className="flexo">
                <div className="demo">
                  <a href={linkin}>
                    <button className="demos">View Demo</button>
                  </a>
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
        </div>
      </div>
    </>
  );
};

export default PostList;
