import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../features/auth/Login";
import Signup from "../features/auth/Signup";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import AddQuestion from "../features/questions/components/AddQuestion";
import ErrorPage from "../pages/ErrorPage";
import Profile from "../features/profile/components/profile";
import Question from "../features/questions/components/ViewQuestion";
import Logout from "../features/auth/Logout";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<PrivateRoutes component={Navbar} />}>
          <Route path="" element={<Home />} />
          <Route path="add-question" element={<AddQuestion />} />
          <Route path="question/:id" element={<Question />} />
          <Route path="profile" element={<Profile />} />
          <Route path="logout" element={<Logout />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default Router;
