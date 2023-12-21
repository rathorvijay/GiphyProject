import { configureStore } from "@reduxjs/toolkit";
import LikeSlice from "./slice/CardSlice";

const store = configureStore({
    reducer:{
        likes:LikeSlice,
    }
})

export default store;