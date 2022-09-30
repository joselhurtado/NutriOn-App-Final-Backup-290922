import React from "react";
import "../../styles/home.css";
import  RecipeDetailsPopular from "/src/front/js/component/RecipeDetailsPopular";
import { BMRSection } from "/src/front/js/component/BMRSection";
import { HeroSearch } from "/src/front/js/component/HeroSearch";
import RecipeCollection from "/src/front/js/component/RecipeCollection.js";


export const SingleRecipePopularPage = () => {
	return (
		<div className="container">
			<div>
				<HeroSearch />
			</div> 
			<div>
				<RecipeDetailsPopular />
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

export default SingleRecipePopularPage;