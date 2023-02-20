import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateUser } from 'redux/users/users.operations';

export const UpdateUserForm = () => {
  const location = useLocation();
  const [form, setForm] = useState(location?.state?.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmitForm = e => {
    e.preventDefault();
    dispatch(updateUser(form));
    navigate('/users/' + form.id);
  };

  const handleInput = e => {
    const { name, value } = e.target;

    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <form
        onSubmit={handleSubmitForm}
        style={{ display: 'grid', width: 300, gap: 12 }}
      >
        <TextField
          label="Address"
          onChange={handleInput}
          name="address"
          type="text"
          value={form.address}
        />
        <TextField
          label="Avatar"
          onChange={handleInput}
          name="avatar"
          type="text"
          value={form.avatar}
        />
        <TextField
          label="Email"
          onChange={handleInput}
          name="email"
          type="email"
          value={form.email}
        />
        <TextField
          label="Name"
          onChange={handleInput}
          name="name"
          type="text"
          value={form.name}
        />
        <TextField
          label="Phone"
          onChange={handleInput}
          name="phone"
          type="tel"
          value={form.phone}
        />
        <Button type="submit">Update</Button>
      </form>
    </>
  );
};
