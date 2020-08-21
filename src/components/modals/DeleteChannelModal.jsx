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
        <Modal.Title>DELETE CHANNEL</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Delete channel:
        {clickedElemName}
        !
        Are you sure?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleDelete}>
          Save Changes
        </Button>
      </Modal.Footer>
    </>
  );
}

export default connect(mapStateToProps, mapActionsToProps)(DeleteChannelModal);
