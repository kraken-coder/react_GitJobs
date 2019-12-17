import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './Components/Layout/NavBar';
import Positions from './Components/Position/Positions';
import axios from 'axios';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import styled from 'styled-components';
import Search from './Components/Layout/Search';
import Loading from './Components/Layout/Loading';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3581b8'
    },
    secondary: {
      main: '#000'
    },
    error: {
      main: '#e54b4b'
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
});

const Container = styled.div`
  max-width: 80%;
  margin: auto;
  overflow: hidden;
  margin-top: 50px;
`;

class App extends Component {
  state = {
    positions: [],
    loading: false,
    APIURL: 'https://jobs.github.com/positions.json'
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(this.state.APIURL);

    this.setState({ positions: res.data });
    this.setState({ loading: false });
  }

  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://jobs.github.com/positions.json?search=${text}`
    );
    this.setState({ positions: res.data });

    this.setState({ loading: false });
  };

  showSearch = (res) => {
    this.setState({ positions: res.data });
  };

  render() {
    const { positions, loading } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <Fragment>
          <Navbar />
          <Container>
            <Search
              search={this.searchUsers}
              showSearch={this.showSearch}
              setLoading={this.setLoading}
            />
            {!this.searchUsers ? <h2>All Jobs</h2> : null}
            {this.state.loading === true ? (
              <Loading />
            ) : (
              <Positions positions={positions} spinner={loading} />
            )}
          </Container>
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
