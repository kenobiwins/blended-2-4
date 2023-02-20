import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { deleteUser } from 'redux/users/users.operations';
import { Backdrop, ModalWindow } from './Modal.styled';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ userId, handleClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener('keydown', handleClose);
    return () => window.removeEventListener('keydown', handleClose);
  }, [handleClose]);

  const handleDelete = id => {
    dispatch(deleteUser(id));
    handleClose();
    navigate('/users');
  };

  const handleBackdropClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      handleClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalWindow>
        <h2>Are you sure ?</h2>
        <ul>
          <li>
            <button onClick={() => handleDelete(userId)}>YES</button>
          </li>
          <li>
            <button onClick={handleClose}>NO</button>
          </li>
        </ul>
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
};
