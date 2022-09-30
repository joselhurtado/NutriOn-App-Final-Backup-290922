import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function RecipeDetailsPopular() {
  const { store } = useContext(Context);
  const params = useParams();
  const [recipe, setResults] = useState({});

  useEffect(() => {
    const data = store.recipeResults.find((item) => {
      if (item.id == params.theid) {
        return item;
      }
    });
    setResults(data);
  }, [store.recipeResults]);

  return (
    <div className="container">
      <div className="card mb-3 cardShapeSingle backgroundSingleResultsPage">
        <div className="row g-0">
          <div className="col-md-6 fillImage">
            <img
              src={`https://spoonacular.com/recipeImages/${recipe?.id}-312x231.${recipe?.imageType}`}
              className="img-fluid shapeImageTopSingle"
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title text-light singleRecipeTitle">{recipe?.title}</h5>
              <hr />
              <div className="d-flex mt-4 justify-content-between">
                <Link to={`/PopularPage`} className="btn btn-orange">
                Go Back
                </Link>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
