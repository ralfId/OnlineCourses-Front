import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  secctionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: { display: "flex" },
  },
  secctionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: { display: "none" },
  },
  grow:{
      flexGrow: 1
  },
  avatarSize:{
      width: 40,
      height:40
  },

  /* For drawer menus */
  list:{
    width: 250
  },
  listItemText:{
    fontSize: "14px",
    fontWeight: 600,
    paddingLeft: "15px",
    color: "#212121"
  }
}));
