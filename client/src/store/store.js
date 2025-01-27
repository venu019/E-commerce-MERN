import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth"
import AdminProductsSlice from "./admin/products-slice"
import shopProductSlice from "./shop/products-slice"
import shopCartSlice from "./shop/cart-slice"
import shopAddressSlice from "./shop/address-slice"
import shopOrderSlice from "./shop/order-slice"
import shopSearchSlice from "./shop/search-slice";

import AdminOrderSlice from "./admin/order-slice"
import commonSlice from "./common-slice/index"

const store = configureStore({
    reducer: {
        auth: authReducer,
        adminProducts: AdminProductsSlice,
        adminOrder:AdminOrderSlice,
        shopProducts:shopProductSlice,
        shopCart: shopCartSlice,
        shopAddress: shopAddressSlice,
        shopOrder: shopOrderSlice,
        commonFeature:commonSlice,
        shopSearch: shopSearchSlice


    }
})

export default store;