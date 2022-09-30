const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      // User: [],
      recipePopular: [],
      recipeInstructions: [],
      recipeResults: [],
      recipeVegan: [],
      recipeKeto: [],
      recipePaleo: [],
      recipeVegetarian: [],
      favorites: [],
      usersignupstats: [], //SignUp Page Store
      usersignupstatstwo: [], //SignUp Page Store
    },
    actions: {
      getPopularRecipes: async () => {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/findByNutrients?apiKey=${process.env.APIfood}&minCarbs=10&maxCarbs=1000&number=12`
        );
        const payload = await response.json();
        setStore({ recipePopular: payload });
        console.log(payload, "Popular Recipes Flux");
      },

      getInstructionsRecipes: async () => {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.APIfood}&number=12`
        );
        const payload = await response.json();
        setStore({ recipeInstructions: payload.recipes });
        console.log(payload, "Recipe Instructions from Flux");
      },

      getResultsRecipes: async (text) => {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=${text}&apiKey=${process.env.APIfood}&number=12`
        );
        const payload = await response.json();
        setStore({ recipeResults: payload.results });
        console.log(payload, "::::::::Results from Flux Recipes:::::::::::");
      },

      getVeganRecipes: async () => {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=vegan&apiKey=${process.env.APIfood}&number=12`
        );
        const payload = await response.json();
        setStore({ recipeVegan: payload.results });
        console.log(payload, "Vegan Recipes");
      },

      getKetoRecipes: async () => {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=keto&apiKey=${process.env.APIfood}&number=12`
        );
        const payload = await response.json();
        setStore({ recipeKeto: payload.results });
        console.log(payload, "Keto Recipes");
      },

      getPaleoRecipes: async () => {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=paleo&apiKey=${process.env.APIfood}&number=12`
        );
        const payload = await response.json();
        setStore({ recipePaleo: payload.results });
        console.log(payload, "Paleo Recipes");
      },

      getVegetarianRecipes: async () => {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=vegetarian&apiKey=${process.env.APIfood}&number=12`
        );
        const payload = await response.json();
        setStore({ recipeVegetarian: payload.results });
        console.log(payload, "Vegetarian Recipes");
      },

      addFavorites: (item) => {
        //Favorites Function
        const store = getStore(); //Access to the Store
        store.favorites.push(item); //Push Item
        setStore(store); //Save the Changes under Store (Update the State)
      },

      removeFavorites: (index) => {
        //Remove Favorites Function
        const store = getStore();
        let updatedList = store.favorites.filter((item, i) => index != i);
        setStore({ favorites: updatedList });
      },

      addsignupData: (userinfo) => {
        //SignUp Page Store
        setStore({ usersignupstats: userinfo });
        console.log(userinfo);
      },

      addsignupDatatwo: (userinfo) => {
        //SignUp Page Store
        setStore({ usersignupstatstwo: userinfo });
      },

      // newUser: async () => {
      //   //New Function to Call Existing Users
      //   const response = await fetch(process.env.DATABASE_URL + "/api/signUp");
      //   const payload = await response.json();
      //   setStore({ User: payload.results });
      //   console.log(payload, "New User Created on the Backend");
      // },

      // getUser: async () => {
      //   //New Function to Call New Users
      //   const response = await fetch(process.env.DATABASE_URL + "/api/getUser");
      //   const payload = await response.json();
      //   setStore({ User: payload.results });
      //   console.log(payload, "Get existing User from Backend");
      // },
    },
  };
};

//* ABOVE THIS LINE LIVES THE NEW API ACTIONS CALLING OBJECTS *//

export default getState;
