import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import logo from "../assets/logo.avif";

function Navbar() {
  const dispatch = useDispatch();

  return (
    <nav className="flex flex-col lg:flex-row justify-between py-4 mx-6 mb-12 sm:gap-6">
      <div className="flex items-center gap-2">
        {/* Logo */}
        <img src={logo} alt="logo" className="w-12 h-12 rounded-full" />
        
        {/* FoodFusion name and date */}
        <div>
          <h1 className="font-bold text-xl">FoodFusion</h1>
          <h2 className="text-lg font-semibold text-gray-600">
            {new Date().toUTCString().slice(0, 16)}
          </h2>
        </div>
      </div>

      {/* Search Input */}
      <div>
        <input
          type="search"
          name="search"
          placeholder="Search here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 cursor-pointer border border-gray-600 text-sm rounded-lg outline-none w-full lg:w-[400px]"
        />
      </div>
    </nav>
  );
}

export default Navbar;
