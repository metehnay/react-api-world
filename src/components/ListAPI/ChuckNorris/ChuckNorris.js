import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import "./ChuckNorris.css";

const ChuckNorris = ({ isAuth, setIsAuth }) => {
  const [loading, setLoading] = useState(false);

  const [jokes, setJokes] = useState(
    "Chuck Norris favourite alcohol is Johnny Walker Texas Ranger"
  );

  const getChuck = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => setJokes(data.value));
  };

  return (
    <>
      <div className="containers">
        <p className="p-2 mt-2 btn btn-primary d-flex justify-content-center api">
          <a href="https://api.chucknorris.io/" target="_blank">
            {" "}
            CLICK TO VISIT API SOURCE
          </a>
        </p>
        <div className="sidebar">
          <Sidebar isAuth={isAuth} setIsAuth={setIsAuth} />
          <div className="norris mt-4">
            <div className="former">
              <h3>{jokes}</h3>
              <button
                onClick={getChuck}
                className="btn btn-base btn-primary w-full p-2 mt-4"
              >
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChuckNorris;
