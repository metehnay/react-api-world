import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import PostList from "../Home/PostList";
import { useContext, MainContext } from "../Context";
import "./Favorites.css";

const Favorites = ({ isAuth, setIsAuth, addFavorite }) => {
  const { postLists, setPostList, favorites, setFavorites } =
    useContext(MainContext);

  useEffect(() => {
    const localData = localStorage.getItem("dam") ?? [];
    setFavorites(localData);
  }, [setFavorites]);
  return (
    <>
      {" "}
      <div className="containers">
        <div className="sidebar">
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
