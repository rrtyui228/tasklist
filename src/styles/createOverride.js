import {createTheme} from '@mui/material/styles';

const createOverride = (componentName, styles) => createTheme({
  components: {
    [componentName]: {
      styleOverrides: styles
    }
  }
});

export default createOverride;
