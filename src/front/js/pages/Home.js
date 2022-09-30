import React from "react";
import "../../styles/home.css";
import RecipeCollection from "/src/front/js/component/RecipeCollection.js";
import { Hero } from "/src/front/js/component/Hero.js";
import { StatsSection } from "/src/front/js/component/StatsSection";
import { BMISection } from "/src/front/js/component/BMISection";

export const Home = () => {
	return (
		<div>
			<section className="container">
				<Hero />
			</section>
			<section className="container">
				<StatsSection />
			</section>
			<section className="container">
				<BMISection />
			</section>
			<section id="RecipeSection" className="container">
				<RecipeCollection />
			</section>
		</div>
)
}
