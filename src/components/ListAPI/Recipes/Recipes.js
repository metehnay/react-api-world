import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import "./Recipes.css";
import { MainContext, useContext } from "../../Context";
import Loading from "../../Loading";

const Recipes = ({ isAuth, setIsAuth }) => {
  const { loads, setLoads } = useContext(MainContext);
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getRecipe = fetch(
      "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "tasty.p.rapidapi.com",
          "x-rapidapi-key":
            "1cc8455a49msh2cb479ec0950b79p1f0ee0jsn7a833e398c03",
        },
      }
    )
      .then((response) => response.json())
      .then(
        (data) => (
          console.log(data.results), setRecipe(data.results), setLoading(true)
        )
      )
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <div className="containers">
        <p className="p-2 mt-2 btn btn-primary d-flex justify-content-center api">
          <a href="https://rapidapi.com/apidojo/api/tasty/" target="_blank">
            {" "}
            CLICK TO VISIT API SOURCE
          </a>
        </p>
        <div className="sidebar">
          <Sidebar isAuth={isAuth} setIsAuth={setIsAuth} />
          <div className="norris mt-4">
            <div className="recipe-container">
              {loading ? (
                <>
                  {recipe.map((recip) => (
                    <>
                      <div className="recipe-item">
                        <img src={recip.thumbnail_url} />
                        <p>{recip.name}</p>
                        <p>by {recip.credits[0].name}</p>
                      </div>
                    </>
                  ))}{" "}
                </>
              ) : (
                <Loading />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipes;
