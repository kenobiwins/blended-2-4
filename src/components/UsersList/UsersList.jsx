// import { Button } from 'components/Button/Button';

import { Button } from 'components/Button/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const UsersList = ({ users }) => {
  const location = useLocation();

  const navigate = useNavigate();

  const handleAddUser = () => {
    navigate('add');
  };

  return (
    <>
      <ul style={{ width: 320 }}>
        {users.map(({ id, name }) => {
          return (
            <li
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
              key={id}
            >
              <Link to={id} state={{ from: location }}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
      <Button text={'add user'} clickHandler={() => handleAddUser()} />
    </>
  );
};
