import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState:{
        searchQueryResult:{}
    },
    reducers:{
        cacheResult : (state,action)=>{
            state.searchQueryResult = {...state.searchQueryResult, ...action.payload}
        }
    }
    
})



export const {cacheResult} = searchSlice.actions

export default searchSlice.reducer
