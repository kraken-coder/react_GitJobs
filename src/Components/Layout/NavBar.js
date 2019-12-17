import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typnography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const NavBar = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      background: purple
    }
  }));

  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position='fixed' className={classes.root}>
        <ToolBar>
          <Typnography variant='h4' component='h1'>
            GitJobs
          </Typnography>
        </ToolBar>
      </AppBar>
    </Fragment>
  );
};
export default NavBar;
