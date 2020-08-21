import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteChannel } from '../../slices/channels';
import { close } from '../../slices/modal';

const mapActionsToProps = { closeModal: close, deleteChannelAsync: deleteChannel };
const mapStateToProps = ({ modal: { clickedElemId, clickedElemName } }) => ({
  clickedElemId,
  clickedElemName,
});

const DeleteChannelModal = (props) => {
  const { closeModal, deleteChannelAsync, clickedElemId, clickedElemName } = props;

  const handleClose = () => {
    closeModal();
  };

  const handleDelete = () => {
    deleteChannelAsync(clickedElemId);
  };

  return(
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
}

export default connect(mapStateToProps, mapActionsToProps)(DeleteChannelModal);
