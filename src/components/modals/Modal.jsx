import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { close } from '../../slices/modal';
import AddChannelModalForm from './AddChannelModalForm';
import DeleteChannelModal from './DeleteChannelModal';
import RenameChannelModal from './RenameChannelModal';

const modalTypes = {
  addChannel: <AddChannelModalForm />,
  deleteChannel: <DeleteChannelModal />,
  renameChannel: <RenameChannelModal />,
};

const ModalComponent = () => {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.modal.type);
  const show = useSelector((state) => state.modal.show);
  const body = modalTypes[type];

  const handleClose = () => {
    dispatch(close());
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      {body}
    </Modal>
  );
};

export default ModalComponent;
