import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import Container from '@mui/material/Container';
import css from './PhonebookView.module.css';
import Typography from '@mui/material/Typography';
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
          maxWidth: 600,
          width: 515,
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 6,
          paddingBottom: 10,
        }}
        className={css.box}
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
