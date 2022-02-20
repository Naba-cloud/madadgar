import React, { useState } from "react";
import { useDispatch } from "react-redux";
import MaskedInput from "react-text-mask";
import {login} from "../features/userSlice";


const Login=()=>{
  const[cnic,setcnic]=useState('');
  const[password,setpassword]=useState('');
  const dispatch=useDispatch();
  const cnicNumberMask = [
    /[1-9]/,
  
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/
  ];
  function getCnic(e){
    console.log(e.target.value);
    setcnic(e.target.value);
  }
  function getpassword(e){
    console.log(e.target.value);
    setpassword(e.target.value);
  }
  function submit(e){
    e.preventDefault();
    dispatch(login({
      cnic:cnic,
      password:password,
      loggedIn:true
    }))
  }
return(<>
{/* <h1>Login</h1> */}
<div className="sign-up">

<div className="container ">
 <div className="row">
 
<div className="col-lg-12 sign-up-form pt-5 pb-5 w-50 mx-auto text-center mt-5"> 

<form >

    <div className="form-group mx-auto text-center">
    <div class="mb-3 w-75 mx-auto text-center ">
   <h1 class="w-100 mx-auto mt-5">Login!</h1>
   </div>

  
  <div class="mb-3 w-75 mx-auto mt-5">
    <label className="mt-5" >CNIC Number</label>
    <MaskedInput
    className="text-white"
                  // {...field}
                  mask={cnicNumberMask}
                  id="cnic"
                  placeholder="Enter your CNIC number"
                  type="text"
                  onChange={getCnic}

                  // onBlur={handleBlur}
                  // className={
                  //   errors.phone && touched.phone
                  //     ? "text-input error"
                  //     : "text-input"
                  // }
                />
    {/* <input onChange={getCnic}type="number" className="form-control" /> */}
  </div>
  <div class="mb-3 w-75 mx-auto text-center">
    <label >Password</label>
    <input onChange={getpassword}type="password" className="form-control" />
  </div>
 
  <div class="mb-3 w-75 mx-auto text-center">
  <button onClick={submit}className="btn submit-btn mx-auto text-center mt-5">Login</button>
  <p className="pt-5">Already have an account ?<a href="">Sign Up</a></p>
  </div>
 
  
  </div>
 
</form><br/><br/>
</div>
{/* <div className="col-lg-5 sign-up-img  mt-5 pt-5 pb-5 mb-5">
<img src={img} className="h-75 mt-5 mr-5"/>
</div> */}
</div>
 </div>
 </div>
</>)
}
export default Login;