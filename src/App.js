import React from 'react';
import Header from './components/header/Header'
import LandingPage from './pages/landing/Landing'
import Platform from './pages/platform/Platform'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary:{
      main: '#444E59'
    },
    secondary:{
      main: '#50E3C4'
    }
  }
});
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Header />
        <LandingPage />
        <Platform />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
