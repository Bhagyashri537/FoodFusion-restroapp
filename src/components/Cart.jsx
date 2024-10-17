import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/slices/CartSlice"; 
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";


function Cart() {
  const [activeCart, setActiveCart] = useState(false); 
  const cartItems = useSelector((state) => state.storeCart.cart); 
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // Calculate total number of items in the cart
  const totalItems = cartItems.reduce((total, item) => total + item.qty, 0);

  
  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id)); 
  };

  
  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id)); 
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id)); 
  };
  

  
  // useEffect(() => {
  //   if (totalItems > 0) {
  //     setActiveCart(true); 
  //   }
  // }, [totalItems]); 

  return (
    <div>
      
      <div
        className={`fixed right-0 top-0 lg:w-[350px] w-full h-full bg-white shadow-lg rounded-l-lg p-5 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-2xl font-bold text-gray-800">My Order</span>
          <AiOutlineClose
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-400 cursor-pointer transition-colors duration-300"
            onClick={() => setActiveCart(!activeCart)} 
          />
        </div>

        <hr className="my-2 border-gray-300" />

        <div className="flex flex-col">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-3 border-b border-gray-200"
            >
              <div className="flex items-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-12 w-12 rounded-md object-cover"
                />
                <span className="ml-3 text-gray-800 font-medium">
                  {item.name}
                </span>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleDecrease(item.id)}
                  className="p-1 text-gray-600 hover:text-green-500 transition-colors duration-300"
                >
                  <AiOutlineMinus />
                </button>
                <span className="mx-2 text-gray-800">{item.qty}</span>
                <button
                  onClick={() => handleIncrease(item.id)}
                  className="p-1 text-gray-600 hover:text-green-500 transition-colors duration-300"
                >
                  <AiOutlinePlus />
                </button>
              </div>
              <span className="text-gray-700 font-semibold">
                ₹{item.price * item.qty}
              </span>
              <button
                onClick={() => handleRemove(item.id)} 
                className="ml-3 text-red-600 hover:text-red-800 transition-colors duration-300"
              >
                <MdDeleteOutline className="text-xl" />
              </button>
            </div>
          ))}
        </div>

        {/* Total Calculation */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold text-gray-800">Total:</span>
          <span className="text-xl font-bold text-green-600">
            ₹
            {cartItems.reduce(
              (total, item) => total + item.price * item.qty,
              0
            )}
          </span>{" "}
          
        </div>

       
        <button onClick={() => navigate('/success')} className="mt-4 w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300">
          Checkout
        </button>
      </div>

      
      <div className="fixed bottom-8 right-4">
        <div
          className="relative cursor-pointer"
          onClick={() => setActiveCart(!activeCart)} 
        >
          <FaCartShopping className={`rounded-full bg-white shadow-xl text-5xl p-3 ${totalItems > 0 && "animate-bounce delay-500 transition-all"} `} />

         
          {totalItems > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
