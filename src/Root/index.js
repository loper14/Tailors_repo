import React, { useEffect, useState } from "react";
import Login from "../Components/Login";
import Navbar from "../Components/Navbar";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import NotFound from "../Pages/404";
import { redirectPaths } from "../Utils/redirectPaths";
import { RequireAuth } from "react-auth-kit";
import Flow from "../Components/Flow";
import Attendance from "../Components/FlowSection/Attendance";
import OTK from "../Components/FlowSection/OTK";
import FlowSection from "../Components/FlowSection";

const Root = () => {
  let date = new Date();
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
