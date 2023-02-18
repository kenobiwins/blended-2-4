import { Button } from 'components/Button/Button';
import { UsersList } from 'components/UsersList/UsersList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/users/users.operations';
import { selectedUsers } from 'redux/users/users.selectors';

export const UsersPage = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectedUsers);

  const handleShowUser = () => {
    console.log('hello');
    dispatch(fetchUsers());
  };

  return (
    <>
      <Button clickHandler={handleShowUser} text="Show users list" />
      {users.length > 0 && <UsersList users={users} />}
    </>
  );
};
