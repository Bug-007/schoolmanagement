import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToList, changeLoggedIn } from "../store";
import { useNavigate } from "react-router-dom";

function StudentList() {
  const navigate = useNavigate();

  const location = useLocation();
  const currentuser = useSelector((state) => {
    return state.state.user.find((item) => {
      return item.email === location.state;
    });
  });

  let arr = currentuser?.stulist;

  const dispatch = useDispatch();

  const [stuinfo, setstuinfo] = useState("");
  return (
    <>
      <button
        className="logout-btn"
        onClick={() => {
          dispatch(changeLoggedIn(false));
          navigate("/");
        }}
        >
        Log Out
      </button>
    <div className="container">
      <div className="center">
        <label htmlFor="add-student">Add Student</label>
        <input
          name="add-student"
          type="text"
          value={stuinfo}
          onChange={(e) => {
            setstuinfo(e.target.value);
          }}
          />
        <button
          className="submit-but"
          onClick={() => {
            if (!(stuinfo === "")) {
              arr = [...arr, stuinfo];
              
              dispatch(addToList({ email: location?.state, stulist: arr }));
            }
            setstuinfo("");
          }}
          >
          + Student
        </button>
      </div>
      <div>
        <ol>
          {currentuser?.stulist?.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ol>
      </div>
    </div>
          </>
  );
}

export default StudentList;
