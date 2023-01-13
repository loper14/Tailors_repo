import React from "react";
import Login from "../Components/Login";
import Navbar from "../Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import NotFound from "../Pages/404";
import { RequireAuth } from "react-auth-kit";
import Flow from "../Components/Flow";
import FlowSection from "../Components/FlowSection";

const Root = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth loginPath={"/login"}>
              <Navbar />
            </RequireAuth>
          }
        >
          <Route index element={<Home />} />
          <Route path="/flow/:flowID" element={<Flow />} />
          <Route
            path="flow/:flowID/:flowSection/:flowDate"
            element={<FlowSection />}
          />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Root;
