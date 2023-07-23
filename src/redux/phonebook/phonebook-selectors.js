const contacts = state => state.phonebook.contacts;
const filter = state => state.filter;

const contactsSelectors = {
  contacts,
  filter,
};

export default contactsSelectors;
