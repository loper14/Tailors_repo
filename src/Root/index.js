import React from "react";
import Login from "../Components/Login";
import Navbar from "../Components/Navbar";
import { Routes, Route } from "react-router-dom";
import NotFound from "../Pages/404";
import { RequireAuth } from "react-auth-kit";
import { routeData } from "../Utils/routes";

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
          {routeData.map(({ path, Element, id }) => (
            <Route key={id} path={path} element={<Element />} />
          ))}
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Root;
