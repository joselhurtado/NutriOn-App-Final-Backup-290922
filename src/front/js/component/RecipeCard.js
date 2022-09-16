import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export default function RecipeCard() {
    const {store, actions} = useContext(Context); //Const to call store data from Flux (Actions is not used yet)
    const [recipes, setRecipes] = useState([]); //UseState run the function from recipes (API)
    console.log(recipes, "Recipes")
    useEffect(() => {
        setRecipes(store.recipeData)
    }, [store.recipeData] // In Here we call out again to keep stored the data on re-load the page
    )

    const vegan = () => { // Function to Work with Booleans
        if (recipes.vegan == true) {
            return "Yes";
        } else {
            return "No"
        }
    }

    const vegetarian = () => { 
        if (recipes.vegetarian = true) {
            return "Yes";
        } else {
            return "No"
        }
    }

    const glutenFree = () => { 
        if (recipes.glutenFree = true) {
            return "Yes";
        } else {
            return "No"
        }
    }

    const dairyFree = () => { 
        if (recipes.dairyFree = true) {
            return "Yes";
        } else {
            return "No"
        }
    }
    

    return (
        <div className="d-flex overflow-auto">{recipes.length > 0 && recipes.map((x,i) => 
            <div key={i} className="card m-2 cardShape" style={{minWidth: "18rem"}}>
                <img src={`https://spoonacular.com/recipeImages/${x.id}-556x370.${x.imageType}`} className="card-img-top shapeImageTop" alt="recipe Image" />
                    <div className="card-body text-light">
                        <h4 className="card-title">{x.title}</h4>
                        <p className="card-text">Vegetarian: {vegetarian()}</p>  
                        <p className="card-text">Vegan: {vegan()}</p>  
                        <p className="card-text">Gluten Free: {glutenFree()}</p>  
                        <p className="card-text">Dairy Free: {dairyFree()}</p>  
                        <div className="d-flex justify-content-between">
                        <Link to={`/recipe/${x.id}`} className="btn btn-orange">
                        Read More
                        </Link>
                        <a onClick={() => actions.addFavorites(x)} className="btn btn-outline-orange fa fa-heart" />
                        </div>
                    </div>
            </div>
        ) }</div>
    );
}