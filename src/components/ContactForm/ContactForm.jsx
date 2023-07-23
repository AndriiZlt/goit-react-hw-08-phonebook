import { useDispatch } from 'react-redux';
import { addContact } from 'redux/phonebook/phonebook-operations';
import contactsSelectors from 'redux/phonebook/phonebook-selectors';
import { useSelector } from 'react-redux';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CreateIcon from '@mui/icons-material/Create';

export default function ContactForm() {
  const defaultTheme = createTheme();
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.contacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const { name } = e.currentTarget;
    let isTaken = false;
    for (let contact of contacts) {
      if (contact.name.toString().toLowerCase() === name.value.toLowerCase()) {
        isTaken = true;
        continue;
      }
    }

    if (!isTaken) {
      dispatch(
        addContact({
          name: e.target.name.value,
          number: e.target.number.value,
        })
      );
    } else {
      alert(`${name.value} is already in contacts.`);
    }
    form.reset();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <CreateIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create contact
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Contact name"
              name="name"
              autoComplete="Contact name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="number"
              label="Phone number"
              type="number"
              id="number"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              create
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
