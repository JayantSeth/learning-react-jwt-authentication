import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import green from "@material-ui/core/colors/green";

// react.school/material-ui

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  customColor: {
    // or hex code, this is normal CSS background-color
    backgroundColor: green[500]
  },
  customHeight: {
    minHeight: 200
  },
  offset: theme.mixins.toolbar
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const example = "primary";
  const isCustomColor = example === "customColor";
  const isCustomHeight = example === "customHeight";
  return (
    <React.Fragment>
      <AppBar
        color={isCustomColor || isCustomHeight ? "primary" : example}
        className={`${isCustomColor && classes.customColor} ${
          isCustomHeight && classes.customHeight
        }`}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            JWT Auth App
          </Typography>
          <Typography>
          <Link href="home" color="inherit">Home</Link>
          </Typography>
          <Typography>
          <Link href="thank_you" color="inherit">Thank You</Link>
          <Link href="login" color="inherit">Login</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
