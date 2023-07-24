import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import Container from '@mui/material/Container';
import css from './PhonebookView.module.css';

const PhonebookView = () => {
  return (
    <Container component="main" className={css.container}>
      <ContactForm />
      <Container>
        <Filter />
        <ContactList />
      </Container>
    </Container>
  );
};
export default PhonebookView;
