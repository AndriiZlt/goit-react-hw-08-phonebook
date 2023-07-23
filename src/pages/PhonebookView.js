import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';

const PhonebookView = () => {
  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};
export default PhonebookView;
