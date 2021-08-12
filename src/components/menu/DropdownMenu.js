import React from "react";
import {
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { closeDropdownMenu } from "../../actions/menu";
import { useStyles } from "../../Styles/ui";
import { Link } from "react-router-dom";

export const DropdownMenu = () => {
  const dispatch = useDispatch();
  const { isDropdownMenuOpen } = useSelector((state) => state.menu);
  const { list, listItemText } = useStyles();

  const handleCloseMenu = () => {
    dispatch(closeDropdownMenu());
  };

  const handleLogout = () => {};
  return (
    <Drawer
      open={isDropdownMenuOpen}
      onClose={handleCloseMenu}
      onKeyDown={handleCloseMenu}
      anchor="right"
    >
      <div className={list}>
        <List>
          <ListItem button component={Link} to="/">
            <Avatar src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383_960_720.jpg" />
            <ListItemText
              classes={{ primary: listItemText }}
              primary="Nombre del Usuario"
            />
          </ListItem>

          <ListItem button onClick={handleLogout}>
            <ListItemText
              classes={{ primary: listItemText }}
              primary="LOGOUT"
            />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};
