import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addUser } from 'redux/users/users.operations';
import { useNavigate } from 'react-router-dom';

export const AddUserForm = () => {
  const [form, setForm] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitForm = e => {
    e.preventDefault();

    dispatch(addUser(form));
    navigate('/users');
  };

  const handleInput = e => {
    const { name, value } = e.target;

    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      style={{ display: 'grid', width: 300, gap: 12 }}
    >
      <TextField
        label="Address"
        onChange={handleInput}
        name="address"
        type="text"
      />
      <TextField
        label="Avatar"
        onChange={handleInput}
        name="avatar"
        type="text"
      />
      <TextField
        label="Email"
        onChange={handleInput}
        name="email"
        type="email"
      />
      <TextField label="Name" onChange={handleInput} name="name" type="text" />
      <TextField label="Phone" onChange={handleInput} name="phone" type="tel" />
      <Button type="submit">Add</Button>
    </form>
  );
};
// address: '762';
// avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/415.jpg';
// email: 'Lindsey.Ernser@hotmail.com';
// id: '24';
// name: 'Colleen Roberts II';
// phone: '1-327-962-5214 x52027';
