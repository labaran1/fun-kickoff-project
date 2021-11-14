import { Typography, Button, Box } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import Logo from '../../Images/logo.png';

interface Props {
  current: boolean;
}

export default function LoginSignupHeader({ current }: Props) {
  const classes = useStyles();
  return (
    <Box className={classes.nav}>
      <Box>
        <img src={Logo} alt="Logo" />
      </Box>

      <Box className={classes.linkContainer}>
        <Link to="#" className={classes.sitterLink}>
          <Typography variant="h6" color="initial" className={classes.sitterLink}>
            become a sitter
          </Typography>
        </Link>
        <Link to="/login" className={classes.link}>
          <Button variant="outlined" className={current ? classes.selected : classes.unselected}>
            login
          </Button>
        </Link>
        <Link to="/signup" className={classes.link}>
          <Button variant="outlined" className={!current ? classes.selected : classes.unselected}>
            sign up
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
