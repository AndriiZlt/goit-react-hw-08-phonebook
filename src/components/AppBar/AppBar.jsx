import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import authSelectors from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { clearContacts } from 'redux/phonebook/phonebook-slice';
import Button from '@mui/material/Button';
import background from '../../avatar.jpg';

const MyAppBar = ({ children }) => {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);
  const [setAnchorElUser] = React.useState(null);

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const [auth] = React.useState(true);
  const [setAnchorEl] = React.useState(null);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
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
                    <p style={{ fontFamily: 'Roboto', marginRight: 10 }}>
                      {email}
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
                    <Button
                      variant="outlined"
                      style={{
                        height: 30,
                        backgroundColor: 'white',
                        // color: '#1976d2',
                        paddingTop: 9,
                      }}
                      type="button"
                      onClick={() => {
                        dispatch(authOperations.logOut());
                        dispatch(clearContacts());
                      }}
                    >
                      Logout
                    </Button>
                  </div>
                ) : (
                  <div>
                    Please Log In
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
