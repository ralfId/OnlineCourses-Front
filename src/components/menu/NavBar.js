import React from "react";
import {
  Button,
  IconButton,
  Toolbar,
  Typography,
  Avatar,
} from "@material-ui/core";
import { useStyles } from "../../Styles/ui";
import { HamburgerMenu } from "../menu/HamburgerMenu";
import { useDispatch } from "react-redux";
import { openDropdownMenu, openHamburgerMenu } from "../../actions/menu";
import { DropdownMenu } from "./DropdownMenu";

export const NavBar = () => {
  const dispatch = useDispatch();
  const { secctionDesktop, secctionMobile, grow, avatarSize } = useStyles();

  const handleOpenMenu = () => {
    dispatch(openHamburgerMenu());
  };

  const handleDropdownMenuOpen =()=>{
    dispatch(openDropdownMenu())
  }
  return (
    <>
      <HamburgerMenu />
      <DropdownMenu />
      <Toolbar>
        <IconButton color="inherit" onClick={handleOpenMenu}>
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

        <div className={secctionMobile} onClick={handleDropdownMenuOpen}>
          <IconButton color="inherit">
            <span className="material-icons">more_vert</span>
          </IconButton>
        </div>
      </Toolbar>
    </>
  );
};
