import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    //name the slice component
    name:'counterApplication',
    //initial value of the state
    initialState:{
        value:0
    },
    reducers:{
        //actions are created inside reducer key
        //each logic is given as key:value pairs

        //increment count
        increment:(state,action)=>{
           state.value+=action.payload
        },

        //decrement count
        decrement:(state,action)=>{
            state.value-=action.payload
        },

        //reset count
        reset:(state)=>{
            state.value=0
        }
    }
})

//slice returns actions as well as reducer
//actions are called by components
//reducer is for store

export const {increment,decrement,reset} = counterSlice.actions

//export reducer
export default counterSlice.reducer