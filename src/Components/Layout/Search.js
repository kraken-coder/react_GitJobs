import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const styles = {
  root: {
    padding: '10px 10px',
    background: '#fff'
  },
  text: {
    margin: '0 0 10px 0'
  }
};
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.search === '') {
      this.props.search(this.state.search);
    }
  };
  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <div style={{ marginTop: '30px' }}>
        <form
          noValidate
          autoComplete='off'
          style={styles.root}
          onSubmit={this.handleSubmit}
        >
          <Typography style={{ marginTop: 10 }}>Search For Jobs</Typography>
          <TextField
            label='Search'
            fullWidth={true}
            placeholder='Position, Job title, '
            style={styles.text}
            onChange={this.handleChange}
            value={this.state.search}
          />
          <Button type='submit' color='secondary' variant='contained'>
            Search {''} <SearchOutlinedIcon />
          </Button>
        </form>
      </div>
    );
  }
}
export default Search;
