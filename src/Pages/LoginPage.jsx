import React, { useState } from "react";
import "./page.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser, addToList, changeLoggedIn } from "../store/index.js";

function LoginPage() {
  const [categ, setcateg] = useState("teach");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [err, seterr] = useState("");

  const isLoggedIn = useSelector((state) => {
    return state.state.isloggedin;
  });

  // Remove console.log before production
  // console.log(isLoggedIn);

  const navigate = useNavigate();

  const user = useSelector((state) => {
    return state.state.user;
  });

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    const emailexist = user.find((item) => {
      return email === item.email;
    }
    
    
    
    );

    if (emailexist) {
      dispatch(changeLoggedIn(true));
      if (categ === "stud") {
        navigate("/addstudent", { state: email });
      }

      if (categ === "teach") {
        navigate("/addteacher", { state: email });
      }
    } else {
      seterr("Please Sign Up");
    }
  }

  return (
    <div className="container">
      <div className="center">
        <label htmlFor="categ">Login As</label>
        <select
          className="dropdown"
          name="categ"
          id="categ"
          onChange={(e) => {
            setcateg(e.target.value);
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
      <div>
        <Link to={"/signup"}>Not a User ? SignUp</Link>
      </div>
      {err}
      <button
        className="submit-but"
        type="submit"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Login
      </button>
    </div>
  );
}

export default LoginPage;
