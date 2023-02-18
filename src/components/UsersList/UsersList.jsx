import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';

export const UsersList = ({ users }) => {
  const [userId, setUserId] = useState('');

  return (
    <ul>
      {users.map(user => {
        return (
          <li key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <Button
              text={'delete user'}
              clickHandler={() => setUserId(user.id)}
            />
          </li>
        );
      })}
      {userId && <Modal userId={userId} handleClose={() => setUserId('')} />}
    </ul>
  );
};
