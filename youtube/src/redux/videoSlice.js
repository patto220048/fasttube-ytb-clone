import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    curentVideo :'',
    loading : false,
    error: false

}
export const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        fetchStart: (state)=>{
            state.loading = true;
        },
        fetchSuccess: (state, action)=>{
            state.loading = false;
            state.curentVideo = action.payload
        },
        fetchFail: (state)=>{
            state.loading = false;
            state.error = true;
        },
        like: (state, action)=>{
            if(!state.curentVideo.likes.includes(action.payload)){
                state.curentVideo.likes.push(action.payload);
                state.curentVideo.dislikes.splice(  
                    state.curentVideo.dislikes.findIndex(
                        (userId) => userId === action.payload),1)
            }
        },
        dislike: (state, action)=>{
            if(!state.curentVideo.dislikes.includes(action.payload)){
                state.curentVideo.dislikes.push(action.payload)
                state.curentVideo.likes.splice(
                    state.curentVideo.likes.findIndex(
                        (userId) => userId === action.payload),1)
            }
        },

    },
  })

export const {fetchStart,fetchSuccess,fetchFail,like, dislike} = videoSlice.actions

export default videoSlice.reducer