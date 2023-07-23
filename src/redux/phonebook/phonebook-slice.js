import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  removeContact,
  addContact,
} from './phonebook-operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    clearContacts(state, _) {
      state.contacts = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchContacts.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        return { ...state, error: payload };
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        return {
          ...state,
          contacts: state.contacts.filter(
            contact => contact.id !== action.payload.data.id
          ),
        };
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addDefaultCase((state, action) => state);
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      return action.payload;
    },
  },
});

export const { clearContacts } = contactsSlice.actions;
