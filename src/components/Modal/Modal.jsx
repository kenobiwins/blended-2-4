import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { deleteUser } from 'redux/users/users.operations';
import { Backdrop, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ userId, handleClose }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteUser(id));
    handleClose();
  };

  return createPortal(
    <Backdrop>
      <ModalWindow>
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
