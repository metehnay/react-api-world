import React from "react";
import Loading from "../../Loading";
import { useParams, Link } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";

export default function CocktailPage({ isAuth, setIsAuth }) {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title"> No cocktail to display</h2>;
  } else {
    const { name, image, category, info, glass, instructions, ingredients } =
      cocktail;
    return (
      <div className="containers">
        <div className="sidebar">
          <Sidebar isAuth={isAuth} setIsAuth={setIsAuth} />

          <section className="cocktail-section">
            <div className="cocktailx-container">
              <Link to="/cocktails" className="btn btn-primary back-btn">
                Back To Cocktails API Page
              </Link>
              <h2 className="section-title">{name}</h2>
            </div>
            <div className="drink">
              <img src={image} alt={name}></img>
              <div className="drink-info">
                <p>
                  <span className="drink-data">name:</span> {name}
                </p>
                <p>
                  <span className="drink-data">category:</span> {category}
                </p>

                <p>
                  <span className="drink-data">serving glass:</span> {glass}
                </p>
                <p>
                  <span className="drink-data">instructons:</span>{" "}
                  {instructions}
                </p>
                <p>
                  <span className="drink-data">ingredients:</span>
                  {ingredients.map((item, index) => {
                    return item ? <span key={index}> {item}</span> : null;
                  })}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
