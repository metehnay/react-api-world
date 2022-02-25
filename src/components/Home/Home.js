import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Home.css";

const Home = ({ isAuth, setIsAuth }) => {
  return (
    <div className="containers">
      <div className="sidebar">
        <Sidebar isAuth={isAuth} setIsAuth={setIsAuth} />
      </div>
    </div>
  );
};

export default Home;
