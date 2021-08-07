import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/theme";
// import { Register } from "./components/auth/Register";
// import { Login } from "./components/auth/Login";
import { UserProfile } from "./components/auth/UserProfile";

export const OnlineCourses = () => {
  return (
    <ThemeProvider theme={theme}>
      <UserProfile />
    </ThemeProvider>
  );
};
