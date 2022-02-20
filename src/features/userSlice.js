import {createSlice} from "@reduxjs/toolkit";

export const userSlice=createSlice({
    user:"user",
    name:"naba",
    cnic:"",
    password:"",
    initialState:{
        user:null,

    },
   reducers:{
       login:(state,action)=>{
           state.user=action.payload;
       },   
       logout:(state)=>{
           state.user=null;
        //    console.log(state.user)
       }
   }
    
})
export const {login,logout}=userSlice.actions;
export const selectUser=(state)=>state.user.user;
export default userSlice.reducer;