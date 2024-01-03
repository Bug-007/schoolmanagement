import React, { useState } from "react";
import "./page.css";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signUpUser, addToList, changeLoggedIn } from "../store/index";


function SignUpPage() {

  const [gotoNextScreen, setgotoNextScreen] = useState(false);
  const [categ, setcateg] = useState("teach");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [err, seterr] = useState("")


  const user = useSelector((state)=>{ return state.state.user});
  const dispatch = useDispatch();


  if(gotoNextScreen){
    return <Navigate to={"/"} state={{categ}}></Navigate>
  }


  function handleSubmit(e) {
    e.preventDefault();

    const emailexist = user.find((item) => {
      return email === item.email;
    });

    if(emailexist){
      seterr("This User Already Exists Use Different Email ID");
    }
    else{
      dispatch(signUpUser({ email, pass }));
    }

  }


  return (
    <div className="container">
      <div className="center">
        <label htmlFor="categ">SignUp As</label>
        <select
          className="dropdown"
          name="categ"
          id="categ"
          value={categ}
          onChange={(e) => {
            setcateg(e.target.options[e.target.selectedIndex].value);
            
          }}
        >
          <option value="teach">Teacher</option>
          <option value="stud">Student</option>
        </select>
        <label htmlFor="email">Enter Your Email</label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <label htmlFor="pass">Enter Your Password</label>
        <input
          name="pass"
          type="password"
          value={pass}
          onChange={(e) => {
            setpass(e.target.value);
          }}
        />
      </div>
      {err}
      <button className="submit-but" type="submit" onClick={(e)=>{handleSubmit(e);
      setgotoNextScreen(true)}}>
        SignUp
      </button>
    </div>
  );
}


export default SignUpPage;
