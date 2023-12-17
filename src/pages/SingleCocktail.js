import React, { useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState({});

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strINgredient1,
            strINgredient2,
            strINgredient3,
            strINgredient4,
            strINgredient5,
          } = data.drinks[0];
          const ingredients = [
            strINgredient1,
            strINgredient2,
            strINgredient3,
            strINgredient4,
            strINgredient5,
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
      } catch (Error) {
        console.log(Error);
      }
    }
    getCocktail();
    setLoading(false);
  }, [id]);
  if (loading) {
    return <Loading></Loading>;
  }
  if (!cocktail) {
    return <h2 className="section-title">No Cocktail to display</h2>;
  }
  const { name, image, category, info, glass, instructions, ingredients } =
    cocktail;

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>
      <h2 className="section-title">{id} </h2>
      <div className="drink">
        <img src={image} alt="" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions:</span>
            {instructions}
          </p>
          {/* <p>
            <span className="drink-data">Ingredient</span>

            {ingredients.map((item, index) => {
              return { item };
            })}
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
