import React, { useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./Home.css";
import PostList from "./PostList";
import { MainContext, useContext } from "../Context";

const Home = ({ isAuth, setIsAuth }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    postLists,
    setPostList,
    favorites,
    setFavorites,
    addFavorite,
    loads,
    setLoads,
    removeFavourites,
  } = useContext(MainContext);

  return (
    <div className="containers">
      <div className="sidebar">
        <Sidebar isAuth={isAuth} setIsAuth={setIsAuth} />
        <div className="centered">
          <div className="bordered">
            <input
              type="text"
              placeholder="Search API..."
              className="px-3 py-2"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button id="ado">
              <Link to="/createpost">+ Add API</Link>
            </button>
          </div>

          <div className="new-container">
            {postLists
              .filter((post) => {
                if (searchTerm == "") {
                  return post;
                } else if (
                  post.title
                    .toLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                ) {
                  return post;
                }
              })
              .map((post) => {
                return (
                  <>
                    <PostList
                      post={post}
                      addFavorite={addFavorite}
                      key={post.id}
                      isAuth={isAuth}
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
