import React from "react";
import "../../styles/home.css";
import  RecipeDetailsVegan from "/src/front/js/component/RecipeDetailsVegan";
import { BMRSection } from "/src/front/js/component/BMRSection";
import { HeroSearch } from "/src/front/js/component/HeroSearch";
import RecipeCollection from "/src/front/js/component/RecipeCollection.js";


export const SingleRecipeVeganPage = () => {
	return (
		<div className="container">
			<div>
				<HeroSearch />
			</div> 
			<div>
				<RecipeDetailsVegan />
			</div>
			<div>
				<BMRSection />
			</div>
			<section className="container">
				<RecipeCollection />
			</section>
		</div>
)
}

export default SingleRecipeVeganPage;