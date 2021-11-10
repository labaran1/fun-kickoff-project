import { AppBar, Grid, Toolbar, Typography, Button, Avatar, Box, Paper } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import Logo from '../../Images/logo.png';
// import Image from "material-ui-image";

interface Props {
  current: boolean;
}

export default function LoginSignupHeader({ current }: Props) {
  const classes = useStyles();
  return (
    <Box className={classes.nav}>
      <div>
        <img src={Logo} alt="Logo" />
      </div>

      <Box className={classes.linkContainer}>
        <Link to="#" className={classes.sitterLink}>
          <Typography variant="h6" color="initial">
            BECOME A SITTER
          </Typography>
        </Link>
        <Link to="/login" className={classes.link}>
          <Button variant="outlined" className={current ? classes.selected : classes.unselected}>
            LOGIN
          </Button>
        </Link>
        <Link to="/signup" className={classes.link}>
          <Button variant="outlined" className={!current ? classes.selected : classes.unselected}>
            SIGN UP
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
