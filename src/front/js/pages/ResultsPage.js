import React, { useEffect, useState, useContext } from "react";
import Context from "../store/appContext.js";
import "../../styles/home.css";
import { HeroSearch } from "/src/front/js/component/HeroSearch";
import getState from "../store/flux.js";
import tempImage from "/src/front/img/Hero Healthy Food.png"
import { PropsWithChildren } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import RecipeCardResults from "/src/front/js/component/RecipeCardResults";

export const ResultsPage = (props) => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const [store, actions] = useState([""]);
  const value = {store, actions};

  //State for Search
  const [query, setQuery] = useState("");
  console.log(query, "/////query from Layout///////")

  return (
    <div className="container">
      <div>
        <HeroSearch />
      </div>
          <RecipeCardResults />
    </div>
  );
};
