import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    curentUser : null,
    loading : false,
    error: false

}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state)=>{
            state.loading = true;
        },
        loginSuccess: (state, action)=>{
            state.loading = false;
            state.curentUser = action.payload
        },
        loginFail: (state)=>{
            state.loading = false;
            state.error = true;
        },
        logout:(state)=>{
            return initialState
        },
        subscription:(state, action)=>{
            if(state.curentUser.subscribersUsers.includes(action.payload)){
                state.curentUser.subscribersUsers.splice(
                    state.curentUser.subscribersUsers.findIndex(
                        channelId => channelId === action.payload),1)

            }else{
                state.curentUser.subscribersUsers.push(action.payload)
            }
        }
    },
  })

export const {loginStart,loginSuccess,loginFail,logout,subscription} = userSlice.actions

export default userSlice.reducer