import { createSlice } from "@reduxjs/toolkit";
import { YOUTUBE_LIVECHAT_OFFSET } from "./const";

const liveChatSlice = createSlice({
    name:'chat',
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.splice(YOUTUBE_LIVECHAT_OFFSET,1);
            state.messages.unshift(action.payload)
        },
        clearAllMessage:(state)=>{
            state.messages = [];
        }
    }
})

export const {addMessage,clearAllMessage}= liveChatSlice.actions

export default liveChatSlice.reducer