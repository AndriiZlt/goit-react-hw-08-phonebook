import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import swal from 'sweetalert';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    console.log('error in fetching contacts', error);
  }
});

export const removeContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      const res = await axios.delete(`contacts/${id}`);
      return res;
    } catch (error) {
      console.log(`error in deleting item ${id}`, error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    try {
      const { data } = await axios.post('/contacts/', newContact);

      return data;
    } catch (error) {
      console.log('error in adding contact', error);
    } finally {
      swal('Good job!', 'You created new contact!', 'success');
    }
  }
);
