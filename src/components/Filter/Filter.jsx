import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/store';
import contactsSelectors from 'redux/phonebook/phonebook-selectors';

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.filter);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          marginTop: 8,
          marginBottom: 5,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Type to filter"
          variant="standard"
          name="filter"
          value={filter}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
        <Button
          style={{ height: 30, width: 40, marginTop: 20 }}
          variant="outlined"
          onClick={() => dispatch(changeFilter(''))}
        >
          clear
        </Button>
      </Box>
    </Container>
  );
}
