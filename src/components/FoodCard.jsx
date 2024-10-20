import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FoodCard({ id, name, price, desc = "", img, rating }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart({ id, name, price, rating, img, qty: 1 }));
    notify(name); // Pass the item's name directly to the notify function
  };

  const notify = (itemName) => toast.success(`${itemName} added to cart!`);

  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-3 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <img
        src={img}
        alt="img"
        className="m-auto h-[130px] rounded-lg hover:scale-110 cursor-pointer transition-transform duration-500 ease-in-out"
      />
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
        <span className="flex items-center text-green-700 text-sm">
          <FaRupeeSign className="text-green-600 mr-1" />
          {price}
        </span>
      </div>
      <p className="text-sm font-light text-gray-600">
        {desc.length > 50 ? desc.slice(0, 50) + "..." : desc}
      </p>
      <div className="flex items-center justify-between">
        <span className="flex items-center text-sm text-gray-700">
          <IoStar className="text-yellow-400 mr-1" /> {rating}
        </span>
        <button
          onClick={handleAdd} // No need for an inline arrow function here
          className="p-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-700 transition-colors duration-300"
        >
          Add to Cart
        </button>
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </div>
  );
}

export default FoodCard;
