import React from 'react';
import {AppBar, Box, Toolbar, Typography} from '@mui/material';
import {styles, createOverride, Theme} from 'styles';

const theme = createOverride('MuiAppBar', {
  root: {
    backgroundColor: styles.deepBlue,
    position: 'relative',
    zIndex: 1400
  }
});

const Header = () => {
  return (
    <Theme theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position={'static'}
          color={'secondary'}
        >
          <Toolbar>
            <Typography
              variant={'h6'}
              component={'div'}
              sx={{ flexGrow: 1 }}
            >
              {'Rrtyui\'s tasks'}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </Theme>
  );
};

export default Header;
