import React, { Component } from 'react'

import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import { blue, indigo } from '@material-ui/core/colors'

import { FirebaseProvider } from './providers/Firebase'
import Routes from './routes'
import './index.css';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: indigo[700]
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
});


class App extends Component {
  render() {
    return (
      <FirebaseProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </FirebaseProvider>
    )
  }
}

export default App;
