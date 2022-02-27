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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import CocktailSearch from "./components/ListAPI/Cocktails/CocktailSearch";
import CocktailPage from "./components/ListAPI/Cocktails/CocktailPage";
import CatFacts from "./components/ListAPI/CatFacts/CatFacts";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [modu, setModu] = useState(false);
  const [postLists, setPostList] = useState([]);
  const [favorites, setFavorites] = useState(localStorage.getItem("dam"));

  const MySwal = withReactContent(Swal);

  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("dam")) ?? [];
    setFavorites(localData);
  }, [setFavorites]);

  const addFavorite = (favorite) => {
    setFavorites([...favorites, favorite]);

    localStorage.setItem("dam", JSON.stringify([...favorites, favorite]));

    toast(`API added to your favorite list`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: "light",
      pauseOnHover: true,
      draggable: false,
    });
  };

  const removeFavourites = () => {
    const greet = () => {
      localStorage.removeItem("dam");

      window.location.reload();
    };
    MySwal.fire({
      title: "REMOVING FAVORITES",
      icon: "warning",
      text: `Are you sure? you wan't to delete all your API favorites.`,
      showCancelButton: true,
      confirmButtonText: "Delete",
      customClass: {
        confirmButton: "btn btn-primary m-2 p-2",
        cancelButton: "btn btn-success m-2 p-2",
      },
      showClass: {
        backdrop: "swal2-noanimation", // disable backdrop animation
        popup: "", // disable popup animation
        icon: "", // disable icon animation
      },
      hideClass: {
        backdrop: "swal2-noanimation", // disable backdrop animation
        popup: "", // disable popup animation
        icon: "", // disable icon animation
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        toast(`Favorite API's deleting. Please wait...`, {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "light",
          pauseOnHover: true,
          draggable: false,
        });

        setTimeout(greet, 3000);
      } else {
        alert("cool");
      }
    });
  };

  const data = {
    postLists,
    setPostList,
    removeFavourites,
    favorites,
    setFavorites,
    addFavorite,
  };
  return (
    <>
      <MainContext.Provider value={data}>
        <ToastContainer />
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
              path="/cocktail/:id"
              element={<CocktailPage isAuth={isAuth} setIsAuth={setIsAuth} />}
            />

            <Route
              path="/recipes"
              element={<Recipes isAuth={isAuth} setIsAuth={setIsAuth} />}
            />
            <Route
              path="/favorites"
              element={<Favorites isAuth={isAuth} setIsAuth={setIsAuth} />}
            />
            <Route
              path="/cocktails"
              element={<CocktailSearch isAuth={isAuth} setIsAuth={setIsAuth} />}
            />

            <Route
              path="/catfacts"
              element={<CatFacts isAuth={isAuth} setIsAuth={setIsAuth} />}
            />
          </Routes>
        </Router>
      </MainContext.Provider>
    </>
  );
}

export default App;
