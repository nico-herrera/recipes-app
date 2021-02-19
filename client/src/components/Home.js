import React, { useState, useEffect } from "react";
import { recipes } from "../data/dummyData";

const Home = () => {
  const [recipe, setRecipe] = useState({
    id: Date.now(),
    name: "",
    ingredients: "",
    instructions: "",
  });
  const [recipeList, setRecipeList] = useState(recipes);

  const changeHandler = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setRecipeList([...recipeList, recipe]);
    localStorage.setItem("recipe", JSON.stringify([...recipeList, recipe]));
  };

  useEffect(() => {
    if (localStorage.getItem("recipe") !== null) {
      setRecipeList(JSON.parse(localStorage.getItem("recipe")));
    } else {
      setRecipeList(recipes);
    }
  }, []);

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
        <label>Ingredients</label>
        <input
          type="ingredients"
          placeholder="Cheese, duh!"
          id="ingredients"
          name="ingredients"
          value={recipe.ingredients}
          onChange={changeHandler}
        />
        <input
          type="instructions"
          placeholder="Cook it?"
          id="instructions"
          name="instructions"
          value={recipe.instructions}
          onChange={changeHandler}
        />
        <button>Add</button>
      </form>
      {recipeList?.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.ingredients}</p>
          <p>{item.instructions}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
