import "./App.css";
import React, { Profiler, useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";
import ChuckNorris from "./components/ListAPI/ChuckNorris/ChuckNorris";
import CreatePost from "./components/CreatePost/CreatePost";
import RandomUser from "./components/ListAPI/RandomUser/RandomUser";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [modu, setModu] = useState(false);
  return (
    <>
      <>
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
              path="/randomuser"
              element={<RandomUser isAuth={isAuth} setIsAuth={setIsAuth} />}
            />
          </Routes>
        </Router>
      </>
    </>
  );
}

export default App;
