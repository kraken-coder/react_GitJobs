import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    display: 'flex',
    flexDirection: 'column',
    transform: 'translate(-50%, -50%)'
  },
  spinner: {
    marginBottom: '30px'
  }
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress size={70} thickness={4} className={classes.spinner} />
    </div>
  );
};

export default Loading;
