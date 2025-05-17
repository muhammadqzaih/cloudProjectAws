// React imports
import { useState } from 'react';

import { Link } from 'react-router-dom';

// Material UI components
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

// Amplify imports
import Auth from '@aws-amplify/auth';
import { Hub } from '@aws-amplify/core';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const signout = async () => {
    try {
      await Auth.signOut();
      Hub.dispatch('UI Auth', {
        event: 'AuthStateChange',
        message: 'signedout'
      });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerList = (
    <List>
      <ListItem button component={Link} to="/conversations" onClick={toggleDrawer}>
        <ListItemText primary="Conversations" />
      </ListItem>
      <ListItem button onClick={() => { toggleDrawer(); signout(); }}>
        <ListItemText primary="Sign Out" />
      </ListItem>
    </List>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: '#000000'
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <strong>Group5 Assistant</strong>
            <Typography variant="caption" sx={{ display: 'block', color: '#ccc', fontSize: '0.75rem' }}>
              Your Cloud Bot
            </Typography>
          </Typography>

          {!isMobile && (
            <>
              <Button component={Link} to="/conversations" color="inherit">
                Conversations
              </Button>
              <Button color="inherit" onClick={signout}>
                Log Out
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        {drawerList}
      </Drawer>
    </Box>
  );
};

export default Header;
