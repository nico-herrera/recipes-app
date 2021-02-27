import React, { useState } from "react";
import EditMenu from "./EditMenu";

import "../styles/RecipeCard.css";

const initialState = {
  id: "",
  name: "",
  ingredients: "",
  instructions: "",
  cookTime: "",
};

const RecipeCard = (props) => {
  const [editing, setEditing] = useState(false);
  const [recipeToEdit, setRecipeToEdit] = useState(initialState);

  const editRecipe = (recipe, id) => {
    if (recipe.id === id) {
      setEditing(true);
      setRecipeToEdit(recipe);
    }
  };

  const saveEdit = (e) => {
    e.preventDefault();
    console.log("saveEdit");
    const filter = props.recipeList.filter(
      (item) => item.id !== recipeToEdit.id
    );
    console.log(filter);
    console.log(recipeToEdit);
    localStorage.setItem("recipe", JSON.stringify([...filter, recipeToEdit]));
    props.setRecipeList([...filter, recipeToEdit]);
    setEditing(false);
  };

  return (
    <div className="recipe-card-container">
      {props.recipeList.map((item) => (
        <div className="recipe-card" key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.ingredients}</p>
          <p>{item.instructions}</p>
          <p>Cook time: {item.cookTime} minutes</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              props.deleteRecipe(item);
            }}
          >
            Delete
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              editRecipe(item, item.id);
            }}
          >
            Edit
          </button>
        </div>
      ))}
      {editing && (
        <EditMenu
          setEditing={setEditing}
          saveEdit={saveEdit}
          recipeToEdit={recipeToEdit}
          setRecipeToEdit={setRecipeToEdit}
        />
      )}
    </div>
  );
};

export default RecipeCard;
