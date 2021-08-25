import React from "react";
import { Provider } from "react-redux";
import { store } from "./context/store/store";
import { AppRouter } from "./routers/AppRouter";
import '../src/Styles/main.css'

export const OnlineCourses = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
