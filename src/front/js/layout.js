import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Context } from "../js/store/appContext";

import { Home } from "../js/pages/Home";
import { ResultsPage } from "./pages/ResultsPage";
import { SingleRecipeResultsPage } from "./pages/SingleRecipeResultsPage";

import { PopularPage } from "../js/pages/PopularPage";
import { SingleRecipePopularPage } from "./pages/SingleRecipePopularPage";

import { VeganPage } from "../js/pages/VeganPage";
import { SingleRecipeVeganPage } from "./pages/SingleRecipeVeganPage";

import { VegetarianPage } from "../js/pages/VegetarianPage";
import { SingleRecipeVegetarianPage } from "./pages/SingleRecipeVegetarianPage";

import { KetoPage } from "../js/pages/KetoPage";
import { SingleRecipeKetoPage } from "./pages/SingleRecipeKetoPage";

import { PaleoPage } from "../js/pages/PaleoPage";
import { SingleRecipePaleoPage } from "./pages/SingleRecipePaleoPage";

import { Login } from "../js/pages/LoginPage";
import { ResetPassword } from "../js/pages/ResetPassword";
import { WelcomePage } from "../js/pages/WelcomePage";
import { SignUpPage } from "../js/pages/SignUpPage";
import { SignUpGoalsPage } from "../js/pages/SignUpGoalsPage";
import injectContext from "../js/store/appContext";

import { NavBar } from "../js/component/NavBar";
import { Footer } from "../js/component/footer";

import Profile from "../js/pages/Profile";

const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";
  const [store, actions] = useState([""]);
  const value = {store, actions};

  //State for Search
  const [query, setQuery] = useState("");
  console.log(query, "/////query from Layout///////")

  return (
    <div>
      <BrowserRouter basename={basename}>
        <NavBar />
        {/* <Context.Provider value={value}> */}
        <Routes>
          <Route index element={<Home />} path="/" />
          <Route element={<Profile />} path="/Dashboard" />
          <Route element={<Login />} path="/LoginPage" />
          <Route element={<ResetPassword />} path="/ResetPassword" />
          <Route element={<WelcomePage />} path="/WelcomePage" />
          <Route element={<SignUpPage />} path="/SignUpPage" />
          <Route element={<SignUpGoalsPage />} path="/SignUpGoalsPage" />

          <Route
            element={<PopularPage query={query} setQuery={setQuery} />}
            path="/PopularPage"
          />
          <Route
            element={<SingleRecipePopularPage />}
            path="/SingleRecipePopular/:theid"
          />

          <Route
            element={<VeganPage query={query} setQuery={setQuery} />}
            path="/VeganPage"
          />
          <Route
            element={<SingleRecipeVeganPage />}
            path="/SingleRecipeVegan/:theid"
          />

          <Route
            element={<VegetarianPage query={query} setQuery={setQuery} />}
            path="/VegetarianPage"
          />
          <Route
            element={<SingleRecipeVegetarianPage />}
            path="/SingleRecipeVegetarian/:theid"
          />

          <Route
            element={<KetoPage query={query} setQuery={setQuery} />}
            path="/KetoPage"
          />

          <Route
            element={<SingleRecipeKetoPage />}
            path="/SingleRecipeKeto/:theid"
          />

          <Route
            element={<PaleoPage query={query} setQuery={setQuery} />}
            path="/PaleoPage"
          />
          <Route
            element={<SingleRecipePaleoPage />}
            path="/SingleRecipePaleo/:theid"
          />

          <Route
            element={<ResultsPage query={query} setQuery={setQuery} />}
            path="/ResultsPage"
          />
          <Route
            element={<SingleRecipeResultsPage />}
            path="/SingleRecipeResults/:theid"
          />

          <Route element={<h1>404 Not Found!</h1>} />
        </Routes>
        <Footer />
        {/* </Context.Provider> */}
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
