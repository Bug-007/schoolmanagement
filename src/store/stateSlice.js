import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
    name: "user",
    initialState: {
        user: [],
        isloggedin:false,
    },

    reducers: {
        signUpUser(state, action) {
            state.user.push( {...action.payload, stulist: [], teachlist:[] });
        },
        addToList(state, action) {

            const index = state.user.findIndex((item)=>{

                return item.email === action.payload.email;

            })

            state.user[index] = { ...state.user[index], ...action.payload}
        
        },
        changeLoggedIn(state, action) {


            state.isloggedin = action.payload;
        },
    }
})


export const { signUpUser , addToList, changeLoggedIn} = stateSlice.actions;

export const  stateReducer = stateSlice.reducer;

