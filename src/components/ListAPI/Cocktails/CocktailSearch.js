import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import "./Cocktail.css";
import { useCallback } from "react";
import Cocktail from "./Cocktail";

const CocktailSearch = ({ isAuth, setIsAuth }) => {
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchValue = React.useRef("");

  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      console.log(data);
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);
  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  function searchCocktail() {
    setSearchTerm(searchValue.current.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

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
              <section className="section search">
                <form className="search-form" onSubmit={handleSubmit}>
                  <div className="form-control">
                    <label htmlFor="name">Search for your cocktail: </label>
                    <input
                      type="text"
                      className="mx-2 border-1 p-1"
                      name="name"
                      id="name"
                      ref={searchValue}
                      onChange={searchCocktail}
                      placeholder="espresso martini..."
                    />
                  </div>
                </form>
              </section>
              <section className="section">
                <h2 className="section-title">cocktails</h2>
                <div className="cocktail-container">
                  {cocktails.map((item) => {
                    return <Cocktail key={item.id} {...item} />;
                  })}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CocktailSearch;
