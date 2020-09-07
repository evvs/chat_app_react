import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteChannel } from '../../slices/channels';
import { close } from '../../slices/modal';

const DeleteChannelModal = () => {
  const dispatch = useDispatch();
  const clickedElemId = useSelector((state) => state.modal.clickedElemId);
  const clickedElemName = useSelector((state) => state.modal.clickedElemName);

  const handleClose = () => {
    dispatch(close());
  };

  const handleDelete = async () => {
    await dispatch(deleteChannel(clickedElemId));
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title><span className="text-danger">DELETE CHANNEL</span></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Delete channel
        <span className="text-primary">
          {` ${clickedElemName}`}
        </span>
        !
        Are you sure?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </>
  );
};

export default DeleteChannelModal;
