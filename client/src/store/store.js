import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth"
import AdminProductsSlice from "./admin/products-slice"
import shopProductSlice from "./shop/products-slice"
import shopCartSlice from "./shop/cart-slice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        adminProducts: AdminProductsSlice,
        shopProducts:shopProductSlice,
        shopCart: shopCartSlice
    }
})

export default store;