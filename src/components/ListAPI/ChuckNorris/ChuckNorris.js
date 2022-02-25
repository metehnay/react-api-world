import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import "./ChuckNorris.css";

const ChuckNorris = ({ isAuth, setIsAuth }) => {
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
