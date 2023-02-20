import { Button } from 'components/Button/Button';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getUser } from 'redux/users/users.operations';
import { getCurrentUser } from 'redux/users/users.selectors';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';

export const UserDetailPage = () => {
  const [userIdState, setUserIdState] = useState('');
  const dispatch = useDispatch();
  const { userId } = useParams();
  const currentUser = useSelector(getCurrentUser);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUser(userId));
  }, [dispatch, userId]);

  const handleGoBack = () => {
    navigate(location?.state?.from ?? '/users');
  };

  return (
    <>
      {currentUser && (
        <>
          <div>
            <button onClick={handleGoBack}>Go Back</button>
            <img src={currentUser.avatar} alt={currentUser.name + 'photo'} />
            <h2>{currentUser.name}</h2>
            <p>Email :{currentUser.email}</p>
            <p>Phone :{currentUser.phone}</p>
            <p>Address :{currentUser.address}</p>
            <Button
              text={'delete user'}
              clickHandler={() => setUserIdState(currentUser.id)}
            />
            <Link
              to={'/users/update/' + currentUser.id}
              state={{ user: currentUser }}
            >
              Edit user
            </Link>
          </div>
          {userIdState && (
            <Modal
              userId={userIdState}
              handleClose={() => setUserIdState('')}
            />
          )}
        </>
      )}
    </>
  );
};
// address: '762';
// avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/415.jpg';
// email: 'Lindsey.Ernser@hotmail.com';
// id: '24';
// name: 'Colleen Roberts II';
// phone: '1-327-962-5214 x52027';
