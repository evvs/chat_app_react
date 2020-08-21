import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { close } from '../../slices/modal';
import AddChannelModalForm from './AddChannelModalForm';
import DeleteChannelModal from './DeleteChannelModal';
import RenameChannelModal from "./RenameChannelModal";

const mapActionsToProps = { closeModal: close };
const mapStateToProps = ({ modal: { type, show } }) => ({ type, show });

const modalTypes = {
  addChannel: <AddChannelModalForm />,
  deleteChannel: <DeleteChannelModal />,
  renameChannel: <RenameChannelModal />,
};

const ModalComponent = (props) => {
  const { show, closeModal, type } = props;
  const body = modalTypes[type];

  const handleClose = () => {
    closeModal();
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      {body}
    </Modal>
  );
};

export default connect(mapStateToProps, mapActionsToProps)(ModalComponent);
