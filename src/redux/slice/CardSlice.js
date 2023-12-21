import {createSlice} from "@reduxjs/toolkit";

export const CardSlice = createSlice({
    name:"likes",
    initialState:localStorage.getItem("likes")?[...JSON.parse(localStorage.getItem("likes"))]:[],
    reducers:{
        add:(state,actions)=>{
            state.push(actions.payload);
            localStorage.setItem("likes",JSON.stringify([...state]))
        },
        remove:(state,actions)=>{
             const likes= state.filter((likes)=>likes!==actions.payload);
             localStorage.setItem("likes",JSON.stringify([...likes]))
             return likes;
        }
    }
});

export const {add,remove}= CardSlice.actions;
export default CardSlice.reducer;