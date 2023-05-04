import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name:'app',
    initialState:{
        isMenuOpen:true,
        popularVideos:[],
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen = !state.isMenuOpen
        },
        addPopularVideo:(state,action)=>{
            state.popularVideos = action.payload
        },
        closeMenu:(state)=>{
            state.isMenuOpen = false;
        }
    }
})


export const {toggleMenu,addPopularVideo,closeMenu} = AppSlice.actions

export default AppSlice.reducer