import css from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContacts,
  removeContact,
} from 'redux/phonebook/phonebook-operations';
import { useEffect } from 'react';
import contactsSelectors from 'redux/phonebook/phonebook-selectors';
import shortid from 'shortid';
import { token } from 'redux/auth/auth-operations';
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import Container from '@mui/material/Container';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactList = props => {
  token.set(useSelector(state => state.auth.token));
  const contacts = useSelector(contactsSelectors.contacts);
  const filter = useSelector(contactsSelectors.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toString().toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {filteredContacts.length > 0 ? (
          <List>
            {filteredContacts.map(({ id, name, number }) => (
              <ListItem disablePadding key={shortid.generate()}>
                <ListItemButton>
                  <ListItemIcon style={{ marginRight: 10 }}>
                    <ContactPhoneIcon style={{ marginRight: 10 }} />
                    {name} {number}
                  </ListItemIcon>
                  <DeleteIcon
                    className={css.deleteIcon}
                    // style={{ height: 20, width: 20 }}
                    onClick={() => dispatch(removeContact(id))}
                    color="primary"
                  />
                  <ListItemText primary="" />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        ) : (
          <>No matches</>
        )}
      </Box>
    </Container>
  );
};

export default ContactList;
