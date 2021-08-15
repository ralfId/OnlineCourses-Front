import React from "react";
import {
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { closeDropdownMenu } from "../../actions/menu";
import { useStyles } from "../../Styles/ui";
import defaultUserPhoto from "../../img/user.png";


export const DropdownMenu = () => {
  const dispatch = useDispatch();
  const {image, userName} = useSelector(state => state.auth)
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
            <Avatar src={image || defaultUserPhoto} />
            <ListItemText
              classes={{ primary: listItemText }}
              primary={userName}
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
