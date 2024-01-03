import { useState } from "react";
import "./App.css";
import LoginPage from "./Pages/LoginPage";
import SignUp from "./Pages/SignUpPage";
import StudentList from "./Pages/StudentList";
import TeacherList from "./Pages/TeacherList";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/addstudent" element={<StudentList />}></Route>
      <Route path="/addteacher" element={<TeacherList />}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
