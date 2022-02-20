import React,{useState} from "react";
import "./Signup.css"
import img from "../Assets/SignupAssets/signup-header.svg"
import useStore  from "../Zustand/store";
const Signup=()=>{
 const userName=useStore(state=>state.userName)
 const getusername=useStore(state=>state.getusername)
console.log(userName);
return (<div className="sign-up">

<div className="container">
 <div className="row">
 
<div className="col-lg-12 sign-up-form pt-5 pb-5 w-50 mx-auto text-center mt-5"> 

<form >

    <div className="form-group mx-auto text-center">
    <div class="mb-3 w-75 mx-auto text-center ">
   <h1 class="w-100 mx-auto ">Register!</h1>
   </div>
<div class="mb-3 w-75 mx-auto text-center ">

    <label>UserName</label>
    <input value={userName} onChange={getusername}type="text" className="form-control " id="exampleInputPassword1"/>
</div>

<div class="mb-3 w-75 mx-auto text-center ">
<label>Select Your Category</label>
    <select className="categories">
      <option>
        Donator
      </option>
      <option>
        Needy
      </option>
      <option>
        Organization
      </option>
    </select>
</div>

  <div class="mb-3 w-75 mx-auto text-center">
    <label>Email address</label>
    <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>

  </div>
  <div class="mb-3 w-75 mx-auto text-center">
    <label >PhoneNumber</label>
    <input type="number" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 w-75 mx-auto text-center">
    <label >Cnic</label>
    <input type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 w-75 mx-auto text-center">
    <label >Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 w-75 mx-auto text-center">
    <label for="exampleInputPassword1" class="form-label">Confirm Password </label>
    <input type="password" class="form-control  " id="exampleInputPassword1"/>
    <br/>
    
  </div>
  <div class="mb-3 w-75 mx-auto text-center">
  <button className="btn submit-btn mx-auto text-center">Register</button>
  <br/>
  <p className="mt-2 pt-3">Already Have An Account lets? <a href="">Login</a></p>
  </div>
 
  
  </div>
 
</form><br/><br/>
</div>
{/* <div className="col-lg-5 sign-up-img  mt-5 pt-5 pb-5 mb-5">
<img src={img} className="h-75 mt-5 mr-5"/>
</div> */}
</div>
 </div>
 
</div>)
}
export default Signup;