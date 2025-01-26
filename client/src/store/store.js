import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth"
import AdminProductsSlice from "./admin/products-slice"
import shopProductSlice from "./shop/products-slice"
import shopCartSlice from "./shop/cart-slice"
import shopAddressSlice from "./shop/address-slice"
import shopOrderSlice from "./shop/order-slice"
import AdminOrderSlice from "./admin/order-slice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        adminProducts: AdminProductsSlice,
        adminOrder:AdminOrderSlice,
        shopProducts:shopProductSlice,
        shopCart: shopCartSlice,
        shopAddress: shopAddressSlice,
        shopOrder: shopOrderSlice

    }
})

export default store;