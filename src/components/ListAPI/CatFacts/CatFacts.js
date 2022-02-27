import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import "./Cats.css";

const CatFacts = ({ isAuth, setIsAuth }) => {
  const [catBreed, setCatBreed] = useState([]);
  const [catFact, setCatFact] = useState([]);

  const getCats = () => {
    fetch("https://catfact.ninja/facts?limit=1&max_length=140")
      .then((response) => response.json())
      .then((lov) => (setCatFact(lov.data), console.log(lov.data)));
  };

  const getBreed = () => {
    fetch("https://catfact.ninja/breeds?limit=1")
      .then((response) => response.json())
      .then((lova) => (setCatBreed(lova.data), console.log(lova.data)));
  };

  useEffect(() => {
    getCats();
    getBreed();
  }, []);

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
              {catFact.map((cats) => (
                <>
                  <h1>{cats.fact}</h1>
                  <button onClick={getCats} className="btn btn-primary">
                    Generate Fact
                  </button>
                </>
              ))}
              <div className="breed-container">
                {catBreed.map((breed) => (
                  <>
                    <div className="breeds">
                      <h5>Breed: {breed.breed}</h5>
                      <h6>Country: {breed.country}</h6>
                      <p>Origin: {breed.origin}</p>
                      <p>Pattern: {breed.pattern}</p>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatFacts;
