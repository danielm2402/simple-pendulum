import React from 'react';
import Header from './components/header/Header'
import LandingPage from './pages/landing/Landing'
import Platform from './pages/platform/Platform'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#444E59'
    },
    secondary: {
      main: '#50E3C4'
    }
  }
});
function App() {
  return (

    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Header />
        <LandingPage />
        <Platform />
      </MuiThemeProvider>
    </div >

  );
}

export default App;
