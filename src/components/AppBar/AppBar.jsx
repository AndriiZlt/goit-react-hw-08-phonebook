import * as React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import { clearContacts } from 'redux/phonebook/phonebook-slice';
import background from '../../images/avatar.jpg';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';

const MyAppBar = ({ children }) => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);
  // const [setAnchorElUser] = React.useState(null);

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const [auth] = React.useState(true);
  // const [setAnchorEl] = React.useState(null);

  const handleMenu = event => {
    // setAnchorEl(event.currentTarget);
  };

  const handleOpenUserMenu = event => {
    // setAnchorElUser(event.currentTarget);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Phonebook
          </Typography>
          {auth && (
            <div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                {isLoggedIn ? (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <p style={{ fontFamily: 'Roboto', marginRight: 15 }}>
                      {userName}
                    </p>

                    <IconButton
                      style={{
                        marginRight: 15,
                      }}
                      onClick={handleOpenUserMenu}
                      sx={{ p: 0 }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          backgroundImage: `url(${background})`,
                          backgroundSize: 'cover',
                          borderRadius: 40,
                        }}
                      ></div>
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        dispatch(authOperations.logOut());
                        dispatch(clearContacts());
                      }}
                    >
                      <LogoutIcon sx={{ color: 'white' }} />
                    </IconButton>
                  </div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <LoginIcon />
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                  </div>
                )}
              </div>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MyAppBar;
