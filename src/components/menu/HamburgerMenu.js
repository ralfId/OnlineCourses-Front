import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { Bookmark, MenuBook } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeHamburgerMenu } from "../../actions/menu";
import { useStyles } from "../../Styles/ui";

export const HamburgerMenu = () => {
  const dispatch = useDispatch();
  const { isHamburgerMenuOpen } = useSelector((state) => state.menu);
  const { roles } = useSelector((state) => state.auth);
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
            <ListItem button component={Link} to="/coursesindex">
              <span className="material-icons">home</span>
              <ListItemText
                classes={{ primary: listItemText }}
                primary="Home"
              />
            </ListItem>
            <ListItem button component={Link} to="/profile">
              <i className="material-icons">account_box</i>
              <ListItemText
                classes={{ primary: listItemText }}
                primary="User Profile"
              />
            </ListItem>
          </List>

          <Divider />

          {
            (roles === "student")
            &&
            (
              <>
               <List>
                <ListItem button component={Link} to="/explorecourses">
                  <MenuBook/>
                  <ListItemText
                    classes={{ primary: listItemText }}
                    primary="Explore course" 
                  />
                </ListItem>
                <ListItem button component={Link} to="/explorecourses">
                  <Bookmark/>
                  <ListItemText
                    classes={{ primary: listItemText }}
                    primary="My courses"
                  />
                </ListItem>
              </List>

              <Divider />
              </>
            )
          }

          {(roles === "rootinstructor" || roles === "instructor") && (
            <>
              <List>
                <ListItem button component={Link} to="/create">
                  <i className="material-icons">add_box</i>
                  <ListItemText
                    classes={{ primary: listItemText }}
                    primary="New Course"
                  />
                </ListItem>
                <ListItem button component={Link} to="/courses">
                  <i className="material-icons">menu_book</i>
                  <ListItemText
                    classes={{ primary: listItemText }}
                    primary="Courses"
                  />
                </ListItem>
              </List>

              <Divider />

              <List>
            <ListItem button component={Link} to="/newInstructor">
              <i className="material-icons">person_add</i>
              <ListItemText
                classes={{ primary: listItemText }}
                primary="New Instructor"
              />
            </ListItem>
            <ListItem button component={Link} to="/listInstructors">
              <i className="material-icons">people</i>
              <ListItemText
                classes={{ primary: listItemText }}
                primary="Instructors"
              />
            </ListItem>
          </List>
            </>
          )}

          
        </div>
      </Drawer>
    </>
  );
};
