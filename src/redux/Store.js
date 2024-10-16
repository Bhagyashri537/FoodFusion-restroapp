import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";

const Store = configureStore({
    reducer : {
        storeCart : CartSlice
    }
})
export default Store;