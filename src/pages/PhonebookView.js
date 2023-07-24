import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import Container from '@mui/material/Container';
import css from './PhonebookView.module.css';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const PhonebookView = () => {
  return (
    <Container
      component="main"
      className={css.container}
      style={{ display: 'flex' }}
    >
      <ContactForm />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 0,
          paddingTop: 5,
        }}
      >
        <Typography component="h1" variant="h5">
          Contacts list
        </Typography>
        <Filter />
        <ContactList />
      </Box>
    </Container>
  );
};
export default PhonebookView;
