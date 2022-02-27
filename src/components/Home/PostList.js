import React from "react";
import "./Home.css";

const PostList = ({ post, addFavorite, removeFavourites }) => {
  const { linkin, title, imageURL, photoURL, name, id } = post;

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
                  <button className="demos">View Demo</button>
                </div>
                {addFavorite && (
                  <div className="butons">
                    <button onClick={() => addFavorite(id)} id="favori">
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
