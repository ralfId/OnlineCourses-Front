import {
  Button,
  IconButton,
  Toolbar,
  Typography,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "../../Styles/ui";

export const NavBar = () => {
  const { secctionDesktop, secctionMobile, grow, avatarSize, list, listItemText } = useStyles();
 const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false)
  
 const handleCloseMenu = () => {
   setIsLeftMenuOpen(false);
 };
 
 const openLeftMenu = () => {
   setIsLeftMenuOpen(true)
 }
 
 return (
    <>
    <Drawer open={isLeftMenuOpen}
    onClose={handleCloseMenu} anchor="left" >
      <div classsName={list} onClick={handleCloseMenu}>
        <List>
          <ListItem button>
            <i className="material-icons">account_box</i>
            <ListItemText className={{primary: listItemText}} primary="User Profile"/>
          </ListItem>
        </List>
      </div>

    </Drawer>
      <Toolbar>
        <IconButton color="inherit" onClick={openLeftMenu}>
          <span className="material-icons">menu</span>
        </IconButton>

        <Typography variant="h6" className={grow}>
          Online Courses
        </Typography>

        <div className={secctionDesktop}>
          <Button color="inherit">Logout</Button>
          <Button color="inherit">User Name</Button>
          <Avatar
            src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383_960_720.jpg"
            className={avatarSize}
          ></Avatar>
        </div>

        <div className={secctionMobile}>
          <IconButton color="inherit">
            <span className="material-icons">more_vert</span>
          </IconButton>
        </div>
      </Toolbar>
    </>
  );
};
