import React from "react";
import {
  Button,
  IconButton,
  Toolbar,
  Typography,
  Avatar,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { useStyles } from "../../Styles/ui";
import { HamburgerMenu } from "../menu/HamburgerMenu";
import { openDropdownMenu, openHamburgerMenu } from "../../actions/menu";
import { DropdownMenu } from "./DropdownMenu";
import defaultUserImage from "../../img/user.png";
import { ExitToApp } from "@material-ui/icons";
import { startCloseSession } from "../../actions/auth";

export const NavBar = () => {
  const dispatch = useDispatch();
  const { userName, image } = useSelector((state) => state.auth);
  const { secctionDesktop, secctionMobile, grow, avatarSize } = useStyles();

  const handleOpenMenu = () => {
    dispatch(openHamburgerMenu());
  };

  const handleDropdownMenuOpen = () => {
    dispatch(openDropdownMenu());
  };

  const logout = () =>{
    dispatch(startCloseSession())
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
          <Button color="inherit">{userName}</Button>
          <Avatar
            src={image || defaultUserImage}
            className={avatarSize}
          ></Avatar>
          <Button color="inherit" onClick={logout}>
            <ExitToApp />
          </Button>
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
