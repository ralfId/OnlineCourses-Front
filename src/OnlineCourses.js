import React from "react";
import { Provider } from "react-redux";
import { store } from "./context/store/store";
// import { Register } from "./components/auth/Register";
// import { Login } from "./components/auth/Login";
import { AppRouter } from "./routers/AppRouter";
// import { UserProfile } from "./components/auth/UserProfile";

export const OnlineCourses = () => {
  return (
    <Provider store={store}>

      <AppRouter/>
    </Provider>
  );
};
