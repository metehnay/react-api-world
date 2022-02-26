import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import PostList from "../Home/PostList";
import { useContext, MainContext } from "../Context";
import "./Favorites.css";

const Favorites = ({ isAuth, setIsAuth, addFavorite }) => {
  const { postLists, setPostList, favorites, setFavorites, removeFavourites } =
    useContext(MainContext);

  return (
    <>
      {" "}
      <div className="containers">
        <p className="p-2 mt-2 btn btn-primary d-flex justify-content-center api">
          <button onClick={removeFavourites} className="btn btn-primary">
            REMOVE FAVORITES
          </button>
        </p>
        <div className="sidebar">
          {" "}
          <Sidebar isAuth={isAuth} setIsAuth={setIsAuth} />
          <div className="norris mt-4">
            <div className="favorite-container">
              <div className="new-container">
                {postLists
                  .filter((post) => favorites.includes(post.id))
                  .map((post) => (
                    <PostList
                      post={post}
                      addFavorite={addFavorite}
                      key={post.id}
                      removeFavourites={removeFavourites}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorites;
