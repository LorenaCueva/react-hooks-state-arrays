import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodList = [...foods, newFood];
    setFoods(newFoodList);
  }

  // function handleDeleteFood(id){
  //   const newFoodList = foods.filter(food => food.id !== id);
  //   setFoods(newFoodList);
  // }

  function handleClick(id){
    const newFoodList = foods.map(food => food.id === id ? {...food, heatLevel : food.heatLevel + 1} : food);
    setFoods(newFoodList);
  }

  function handleFilterChange(e){
    setFilterBy(e.target.value);
  }
  
  const foodsToDisplay = foods.filter(food => filterBy === "All" ? true : food.cuisine === filterBy);


  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
    </div>
  );
}

export default SpicyFoodList;
