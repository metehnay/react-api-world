import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import "./Pokemon.css";

const Pokemon = ({ isAuth, setIsAuth }) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getPoke = fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((resp) => resp.json())
      .then((data) => setPokemon(data.results));
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
          <div className="norris">
            <div className="poke-grid">
              {pokemon.map((poke) => (
                <>
                  <div className="poke-item">
                    <img
                      src={`https://img.pokemondb.net/artwork/large/${poke.name}.jpg`}
                    />
                    <p className="pok">{poke.name}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pokemon;
