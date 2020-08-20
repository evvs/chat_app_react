import React, {useMemo} from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { close } from '../../slices/modal';
import AddChannelModal from './AddChannelModal';

const mapActionsToProps = { closeModal: close };
const mapStateToProps = ({ modal: { type, show } }) => ({ type, show });

const modalTypes = {
  addChannel: AddChannelModal,
};

const ModalComponent = (props) => {
  const { show, closeModal, type } = props;

  const MemoBody = useMemo(() => modalTypes[type], [type]);

  //const ModalBody = modalTypes[type];

  const handleClose = () => {
    closeModal();
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      <MemoBody />
    </Modal>
  );
};

export default connect(mapStateToProps, mapActionsToProps)(ModalComponent);
