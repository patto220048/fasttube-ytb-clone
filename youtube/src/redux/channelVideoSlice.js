import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    curentChannel :null,
    loading : false,
    error: false

}
export const channelVideoSlice = createSlice({
    name: "channelVideo",
    initialState,
    reducers: {
        channelStart: (state)=>{
            state.loading = true;
        },
        channelSuccess: (state, action)=>{
            state.loading = false;
            state.curentChannel = action.payload
        },
        channelFail: (state)=>{
            state.loading = false;
            state.error = true;
        },
    },
  })

export const {channelStart,channelSuccess,channelFail} = channelVideoSlice.actions

export default channelVideoSlice.reducer