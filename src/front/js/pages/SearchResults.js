import React from "react";
import "../../styles/home.css";
import  RecipeCardSearchResults from "/src/front/js/component/RecipeCardSearchResults";
import { ButtonDiets } from "/src/front/js/component/ButtonDiets"
import { HeroSearch } from "/src/front/js/component/HeroSearch";

export const SearchResults = () => {
	return (
		<div className="container">
			<div>
				<HeroSearch />
			</div> 
			<div>
				<ButtonDiets />
			</div>
			<div>
				<h1 className="text-center">Results Recipes</h1>
				<div>
				<RecipeCardSearchResults />
				</div>
			</div>
		</div>
)
}

export default SearchResults;