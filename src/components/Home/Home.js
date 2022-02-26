import React, { useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./Home.css";
import PostList from "./PostList";
import { MainContext, useContext } from "../Context";

const Home = ({ isAuth, setIsAuth }) => {
  const {
    postLists,
    setPostList,
    favorites,
    setFavorites,
    addFavorite,
    removeFavourites,
  } = useContext(MainContext);

  return (
    <div className="containers">
      <div className="sidebar">
        <Sidebar isAuth={isAuth} setIsAuth={setIsAuth} />
        <div className="centered">
          <div className="bordered">
            <button id="ado">
              <Link to="/createpost">+ Add API</Link>
            </button>
          </div>

          <div className="new-container">
            {postLists?.map((post) => {
              return (
                <>
                  <PostList
                    post={post}
                    addFavorite={addFavorite}
                    key={post.id}
                    removeFavourites={removeFavourites}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
