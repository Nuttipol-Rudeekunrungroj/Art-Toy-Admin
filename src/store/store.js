import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import adminProductsSlice from './admin/products-slice'
import adminOrderSlice from "./admin/order-slice";

const store = configureStore({
    reducer : {
        auth: authReducer,
        
        adminProducts : adminProductsSlice,
        adminOrder: adminOrderSlice,
        

    },
});

export default store;