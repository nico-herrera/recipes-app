import React, { useState, useEffect } from "react";
import { recipes } from "../data/dummyData";
import RecipeCard from "./RecipeCard";
import EditMenu from "./EditMenu";

import "../styles/Home.css";

const Home = () => {
  const [recipe, setRecipe] = useState({
    id: Date.now(),
    name: "",
    ingredients: "",
    instructions: "",
    cookTime: 60,
  });
  const [recipeList, setRecipeList] = useState(recipes);

  const changeHandler = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setRecipeList([...recipeList, recipe]);
    localStorage.setItem("recipe", JSON.stringify([...recipeList, recipe]));
    console.log(localStorage.getItem("recipe"));
  };

  useEffect(() => {
    if (localStorage.getItem("recipe") !== null) {
      setRecipeList(JSON.parse(localStorage.getItem("recipe")));
    } else {
      setRecipeList(recipes);
    }
  }, []);

  const deleteRecipe = (recipe) => {
    const filter = recipeList.filter((item) => item.id !== recipe.id);
    localStorage.setItem("recipe", JSON.stringify([...filter]));
    setRecipeList(filter);
  };

  console.log(recipeList);
  return (
    <div>
      <h1>DIY Recipes!</h1>
      <h3>Lets practice! Try adding a recipe below</h3>

      <form onSubmit={onSubmit}>
        <label htmlFor="name">Recipe Name</label>
        <input
          placeholder="Cheese Pizza"
          id="name"
          name="name"
          value={recipe.name}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="ingredients">Ingredients</label>
        <input
          type="ingredients"
          placeholder="Cheese!"
          id="ingredients"
          name="ingredients"
          value={recipe.ingredients}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="instructions">Instructions</label>
        <input
          type="instructions"
          placeholder="Bake it on 450"
          id="instructions"
          name="instructions"
          value={recipe.instructions}
          onChange={changeHandler}
        />

        <br />
        <label htmlFor="cookTime">Cook Time</label>
        <input
          type="number"
          placeholder="How long?"
          id="cookTime"
          name="cookTime"
          value={recipe.cookTime}
          onChange={changeHandler}
        />
        <br />
        <input
          type="range"
          min="0"
          max="600"
          id="cookTime"
          name="cookTime"
          value={recipe.cookTime}
          onChange={changeHandler}
        />

        <br />
        <button>Add</button>
      </form>
      <RecipeCard
        setRecipe={setRecipe}
        setRecipeList={setRecipeList}
        recipe={recipe}
        recipeList={recipeList}
        deleteRecipe={deleteRecipe}
      />
    </div>
  );
};

export default Home;
