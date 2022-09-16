import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function RecipeCard() {
    const {store} = useContext(Context);
    const params = useParams();
    const [recipe, setRecipe] = useState({});
    
    useEffect(() => {
        const data = store.recipeData.find(item => {
            if(item.id == params.theid){
                return item;
            }
        })
        setRecipe(data);
    },[store.recipeData])

    return (
        <div className="container">
            <br />
            <h1 >{recipe?.title}</h1>
            <hr />
            <div className="card mb-3 cardShapeSingle">
            <div className="row g-0">
                <div className="col-md-6 fillImage">
                <img src={`https://spoonacular.com/recipeImages/${recipe?.id}-556x370.${recipe?.imageType}`} className="img-fluid shapeImageTopSingle" alt="..." />
                </div>
                <div className="col-md-6">
                <div className="card-body">
                    <h5 className="card-title">{recipe?.title}</h5>
                    <p className="card-text">Ready Minutes:<strong>{recipe?.readyInMinutes}</strong></p>
                    <p className="card-text">Servings: <strong>{recipe?.servings}</strong></p>
                    <p className="card-text">Recipe Link: <strong>{recipe?.sourceUrl}</strong></p>
                    <p className="card-text">Product ID: <strong>{recipe?.id}</strong></p>
                    <p className="card-text">Protein: <strong>{recipe?.protein}</strong></p>
                    <p className="card-text">Height: <strong>{recipe?.id}</strong></p>
                    <p className="card-text">Height: <strong>{recipe?.id}</strong></p>
                    <p className="card-text">Height: <strong>{recipe?.id}</strong></p>
                    <br />
                </div>
                </div>
            </div>
            </div>
            <div className="d-flex justify-content-between p-2">
                <Link to="/">
                <div className="btn btn-orange">
                    <span className="fa fa-home"></span>
                    <span>Back to Home</span></div>
				</Link>
            </div>
        </div>
    );
}