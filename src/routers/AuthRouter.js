import { Grid } from "@material-ui/core";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { UserProfile } from "../components/auth/UserProfile";
import { Courses } from "../components/courses/Courses";
import { CoursesIndex } from "../components/courses/CoursesIndex";
import { CreateCourse } from "../components/courses/CreateCourse";
import { StudentIndex } from "../components/courses/students/StudentIndex";
import { AppNavbar } from "../components/menu/AppNavbar";

export const AuthRouter = () => {
  return (
    <>
      <AppNavbar />
      <Grid>
        <Switch>
          <Route exact path="/coursesindex" component={CoursesIndex}/>
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path='/create' component={CreateCourse}/>
          <Route exact path="/courses" component={Courses}/>
          <Route exact path="/explorecourses" component={StudentIndex}/>
          {/* <Route exact path="/mycourses" component={}/> */}

          <Redirect to="/coursesindex" />
        </Switch>
      </Grid>
    </>
  );
};
