import "./App.css";
import React, { Profiler, useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";
import ChuckNorris from "./components/ListAPI/ChuckNorris/ChuckNorris";
import CreatePost from "./components/CreatePost/CreatePost";
import RandomUser from "./components/ListAPI/RandomUser/RandomUser";
import Pokemon from "./components/ListAPI/Pokemon/Pokemon";
import Valorant from "./components/ListAPI/Valorant/Valorant";
import Recipes from "./components/ListAPI/Recipes/Recipes";
import { MainContext } from "./components/Context";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "./firebase";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [modu, setModu] = useState(false);
  const [postLists, setPostList] = useState([]);
  const [favorites, setFavorites] = useState(localStorage.getItem("dam"));

  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  useEffect(() => {
    const localData = localStorage.getItem("dam") ?? [];
    setFavorites(localData);
  }, [setFavorites]);

  const addFavorite = (favorite) => {
    setFavorites([...favorites, favorite]);

    localStorage.setItem("dam", JSON.stringify([...favorites, favorite]));
  };

  const data = {
    postLists,
    setPostList,
    favorites,
    setFavorites,
    addFavorite,
  };
  return (
    <>
      <MainContext.Provider value={data}>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={<Home isAuth={isAuth} setIsAuth={setIsAuth} />}
            />
            <Route
              path="/login"
              element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />}
            />
            <Route
              path="/createpost"
              element={<CreatePost isAuth={isAuth} setIsAuth={setIsAuth} />}
            />
            <Route
              path="/signup"
              element={<SignUp isAuth={isAuth} setIsAuth={setIsAuth} />}
            />
            <Route
              path="/chucknorris"
              element={<ChuckNorris isAuth={isAuth} setIsAuth={setIsAuth} />}
            />
            <Route
              path="/pokemon"
              element={<Pokemon isAuth={isAuth} setIsAuth={setIsAuth} />}
            />
            <Route
              path="/randomuser"
              element={<RandomUser isAuth={isAuth} setIsAuth={setIsAuth} />}
            />
            <Route
              path="/valorant"
              element={<Valorant isAuth={isAuth} setIsAuth={setIsAuth} />}
            />
            <Route
              path="/recipes"
              element={<Recipes isAuth={isAuth} setIsAuth={setIsAuth} />}
            />
            <Route
              path="/favorites"
              element={<Favorites isAuth={isAuth} setIsAuth={setIsAuth} />}
            />
          </Routes>
        </Router>
      </MainContext.Provider>
    </>
  );
}

export default App;
