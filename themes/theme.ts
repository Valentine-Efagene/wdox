import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      //main: '#556cd6',
      main: '#6547D4',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    "fontFamily": `"Roboto", sans-serif`,
  }
});

export default theme;