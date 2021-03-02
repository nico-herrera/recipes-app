import React from "react";

import "../styles/EditMenu.css";

const EditMenu = ({ setEditing, saveEdit, recipeToEdit, setRecipeToEdit }) => {
  return (
    <>
      <div className="edit-menu">
        <form onSubmit={saveEdit}>
          <legend>Edit Recipe</legend>
          <label htmlFor="name">Edit name</label>
          <input
            id="name"
            name="name"
            onChange={(e) =>
              setRecipeToEdit({ ...recipeToEdit, name: e.target.value })
            }
            value={recipeToEdit.name}
          />
          <br />
          <label htmlFor="ingredients">Edit ingredients</label>
          <input
            id="ingredients"
            name="ingredients"
            onChange={(e) =>
              setRecipeToEdit({ ...recipeToEdit, ingredients: e.target.value })
            }
            value={recipeToEdit.ingredients}
          />
          <br />
          <label htmlFor="instructions">Edit instructions</label>
          <input
            id="instructions"
            name="instructions"
            onChange={(e) =>
              setRecipeToEdit({ ...recipeToEdit, instructions: e.target.value })
            }
            value={recipeToEdit.instructions}
          />
          <br />
          <label htmlFor="cookTime">Edit cook time</label>
          <input
            id="cookTime"
            type="number"
            name="cookTime"
            onChange={(e) =>
              setRecipeToEdit({ ...recipeToEdit, cookTime: e.target.value })
            }
            value={recipeToEdit.cookTime}
          />
          <div className="button-row">
            <button type="submit">Save</button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setEditing(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditMenu;
