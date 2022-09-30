import React from "react";
import "../../styles/home.css";
import  RecipeDetailsResults from "/src/front/js/component/RecipeDetailsResults";
import RecipeCollection from "/src/front/js/component/RecipeCollection.js";

export const SingleRecipeResultsPage = () => {
	return (
		<div id="ResultsSinglePage" className="container">
			<div>
				<RecipeDetailsResults />
			</div>
			<section className="container">
				<RecipeCollection />
			</section>
		</div>
)
}

export default SingleRecipeResultsPage;