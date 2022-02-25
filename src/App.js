import "./App.css";
import React, { Profiler, useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

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
              element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />}
            />
            <Route
              exact
              path="/signup"
              element={<SignUp isAuth={isAuth} setIsAuth={setIsAuth} />}
            />
          </Routes>
        </Router>
      </>
    </>
  );
}

export default App;
