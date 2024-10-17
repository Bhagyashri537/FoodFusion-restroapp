import React, { useState, useEffect } from "react";
import FoodData from "../Data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

function CategoryMenu() {
  const [categories, setCategories] = useState([]);

  const listCategories = () => {
    const uniqueCat = [...new Set(FoodData.map((food) => food.category))];
    setCategories(uniqueCat);
  };

  useEffect(() => {
    listCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="mx-6">
      <h2 className="text-xl font-semibold">Find the best food</h2>
      <div className="my-5 flex gap-3">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 bg-gray-300 font-bold rounded-lg hover:bg-green-300 hover:text-white  ${
            selectedCategory === "All" && "bg-green-600 text-white"
          }`}
        >
          All
        </button>

        {categories.map((cat, index) => {
          return (
            <button
              key={index}
              onClick={() => dispatch(setCategory(cat))}
              className={`px-3 py-2 bg-gray-300 font-bold rounded-lg hover:scale-110 hover:text-black ${
                selectedCategory === cat && "bg-green-600 text-white"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryMenu;
