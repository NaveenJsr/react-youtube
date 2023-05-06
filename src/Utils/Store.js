import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import searchSlice from "./searchSlice"
import liveChatSlice from "./liveChatSlice";

const store = configureStore({
    reducer:{
        app:AppSlice,
        search: searchSlice,
        chat:liveChatSlice
    }
})

export default store