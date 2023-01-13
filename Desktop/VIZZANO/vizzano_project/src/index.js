import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Root from "./Root";
import { AuthProvider } from "react-auth-kit";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider
      authType={"cookie"}
      SameSite="none"
      authName={"_auth"}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
    >
      <Root />
    </AuthProvider>
  </BrowserRouter>
);
