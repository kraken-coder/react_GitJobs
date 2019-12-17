import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import Divider from '@material-ui/core/Divider';

const useStyle = makeStyles((theme) => ({
  root: {
    minWidth: 200,
    margin: theme.spacing(2, 0),
    padding: theme.spacing(3, 2)
  },

  media: {
    height: 0,
    paddingTop: '50%'
  },
  button: {
    display: 'flex',
    flexBasis: 'end',
    marginTop: theme.spacing(1)
  }
}));

const ChipContainer = styled.div`
  display: flex;
  grid-gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
  padding: 10px 10px;
`;
const Position = ({ position }) => {
  console.log(position.id);

  const classes = useStyle();
  return (
    <Fragment>
      <div className={classes.root}>
        <Typography gutterBottom variant='h5' component='h6'>
          Position: {position.title}
        </Typography>
        <Typography gutterBottom variant='h6' component='h6'>
          Hiring Company: {position.company}
        </Typography>
        <Typography>
          {' '}
          <QueryBuilderOutlinedIcon /> Posted on: {position.created_at}
        </Typography>
        <Divider variant='middle' />
        <ChipContainer>
          <Chip
            label={position.location}
            icon={<RoomOutlinedIcon />}
            color='primary'
          />
          <Chip label={position.type} color='primary' />
        </ChipContainer>

        <Button
          color='secondary'
          variant='contained'
          className={classes.button}
        >
          View More
        </Button>
      </div>
    </Fragment>
  );
};

Position.prototype = {
  position: PropTypes.object.isRequired
};
export default Position;
