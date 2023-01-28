import React from "react";
import { AuthProvider } from "react-auth-kit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../Redux";

const UseWrapper = ({ children }) => {
  return (
    <BrowserRouter>
      <AuthProvider
        authType={"cookie"}
        SameSite="none"
        authName={"_auth"}
        cookieDomain={window.location.hostname}
        cookieSecure={window.location.protocol === "https:"}
      >
        <Provider store={store}>{children}</Provider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default UseWrapper;
