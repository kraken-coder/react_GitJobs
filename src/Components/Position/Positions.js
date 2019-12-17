import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../Layout/Loading';
import Position from './Position';
import Paper from '@material-ui/core/Paper';

const Positions = ({ spinner, positions }) => {
  if (spinner) {
    return <Loading />;
  } else {
    return (
      <div>
        {positions.map((position) => (
          <Paper>
            <Position key={position.id} position={position} />
          </Paper>
        ))}
      </div>
    );
  }
};

Positions.prototype = {
  positions: PropTypes.array.isRequired,
  spinner: PropTypes.bool.isRequired
};

export default Positions;
