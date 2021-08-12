import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeHamburgerMenu } from "../../actions/menu";
import { useStyles } from "../../Styles/ui";

export const HamburgerMenu = () => {
  const dispatch = useDispatch();
  const { isHamburgerMenuOpen } = useSelector((state) => state.menu);
  const { list, listItemText } = useStyles();

  const handleCloseMenu = () => {
    dispatch(closeHamburgerMenu());
  };
  return (
    <>
      <Drawer
        open={isHamburgerMenuOpen}
        onClose={handleCloseMenu}
        anchor="left"
      >
        <div classes={list} onClick={handleCloseMenu}>
          <List>
            <ListItem button component={Link} to="/profile">
              <i className="material-icons">account_box</i>
              <ListItemText
                classes={{ primary: listItemText }}
                primary="User Profile"
              />
            </ListItem>
          </List>

          <Divider />

          <List>
              <ListItem button component={Link}  to="/newCourse">
                  <i className="material-icons">add_box</i>
                  <ListItemText classes={{primary: listItemText}} primary="New Course"/>
              </ListItem>
              <ListItem button component={Link} to="/exploreCourses">
                  <i className="material-icons">menu_book</i>
                  <ListItemText classes={{ primary: listItemText}} primary="Explore Courses"/>
              </ListItem>
          </List>

          <Divider/>

          <List>
              <ListItem button component={Link} to="/newInstructor">
                  <i className="material-icons">person_add</i>
                  <ListItemText classes={{primary: listItemText}} primary="New Instructor"/>
              </ListItem>
              <ListItem button component={Link} to="/listInstructors">
                  <i className="material-icons">people</i>
                  <ListItemText classes={{primary: listItemText}} primary="Instructors"/>
              </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};
