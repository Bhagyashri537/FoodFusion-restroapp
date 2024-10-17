import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../Data/FoodData";
import { useSelector } from "react-redux";

function FoodItems() {
  const category = useSelector((store) => store.category.category); 
  const search = useSelector((store) => store.search.search || ""); // Ensure search is always a string

  return (
    <>
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {FoodData.filter((food) => {
          const foodNameMatches = food.name
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase()); // Search for matching names

          if (category === "All") {
            return foodNameMatches; 
          } else {
            return (
              category.toLocaleLowerCase() === food.category.toLocaleLowerCase() && foodNameMatches
            ); // Match by both category and search term
          }
        }).map((food) => {
          return (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
              img={food.img}
            />
          );
        })}
      </div>
    </>
  );
}

export default FoodItems;
