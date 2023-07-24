import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import Container from '@mui/material/Container';

const PhonebookView = () => {
  return (
    <Container component="main" style={{ display: 'flex' }}>
      <ContactForm />
      <Container>
        <Filter />
        <ContactList />
      </Container>
    </Container>
  );
};
export default PhonebookView;
