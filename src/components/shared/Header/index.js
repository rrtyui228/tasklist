import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {styles, createOverride, Theme} from 'styles';

const theme = createOverride('MuiAppBar', {
  root: {
    backgroundColor: styles.deepBlue,
  }
});

const Header = () => {
  return (
    <Theme theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position={'static'}
          color={'secondary'}
          enableColorOnDark={true}
        >
          <Toolbar>
            <Typography
              variant={'h6'}
              component={'div'}
              sx={{ flexGrow: 1 }}
            >
              {'Rrtyui\'s tasks'}
            </Typography>
            <Button color={'inherit'}>Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Theme>
  );
};

export default Header;
