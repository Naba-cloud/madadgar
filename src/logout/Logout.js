import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
const Logout=()=>{
    const dispatch=useDispatch(logout())
   const handleLogout=(e)=>{
        e.preventDefault();
        console.log("clicked")
     dispatch(logout());
    }
    return(<>
    <h1>Dashboard</h1>
    <button onClick={(e)=>{handleLogout(e)}}>Logout</button>
  
    </>)
}
export default Logout;