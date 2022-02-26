import React from "react";

const PostList = ({ post, addFavorite }) => {
  const { linkin, title, imageURL, photoURL, name, id } = post;

  return (
    <>
      <div>
        <div className="post">
          <div className="postimage">
            <div className="del"></div>

            <div className="images">
              <a href={linkin}>
                <p className="ss">{title}</p>

                <img src={imageURL} id="img-photo" />
              </a>
              <div className="uploader">
                <img src={photoURL} />

                <p>by {name}</p>
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
    </>
  );
};

export default PostList;
