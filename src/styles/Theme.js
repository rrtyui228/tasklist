import React from 'react';
import PropTypes from 'prop-types';
import {ThemeProvider} from '@mui/material/styles';

const Theme = ({children, theme}) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

Theme.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object
};

export default Theme;
