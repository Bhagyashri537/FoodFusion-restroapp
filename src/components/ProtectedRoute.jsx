import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({element}) {
const cartItems = useSelector((store) => store.storeCart.cart)
return cartItems.length > 0 ? element : <Navigate to= "/" />
  
}

export default ProtectedRoute