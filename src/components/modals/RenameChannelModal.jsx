import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik';
import { close } from '../../slices/modal';
import { renameChannel } from '../../slices/channels';

const mapActionsToProps = { closeModal: close, renameChannelAsync: renameChannel };
const mapStateToProps = ({ modal: { clickedElemId } }) => ({
  clickedElemId,
});

const AddChannelModalForm = (props) => {
  const { closeModal, renameChannelAsync, clickedElemId } = props;

  const handleClose = () => {
    closeModal();
  };

  const formik = useFormik({
    initialValues: {
      id: clickedElemId,
      newChannelName: '',
    },
    onSubmit: (values) => {
      renameChannelAsync({
        id: clickedElemId,
        name: values.newChannelName,
      });
      console.log('success', values.newChannelName);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Modal.Header closeButton>
        <Modal.Title>RENAME CHANNEL</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label htmlFor="email">new channel name: </label>
        <input
          className="form-control"
          id="newChannelName"
          name="newChannelName"
          type="text"
          required
          onChange={formik.handleChange}
          value={formik.values.newChannelName}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Rename
        </Button>
      </Modal.Footer>
    </form>
  );
};

export default connect(mapStateToProps, mapActionsToProps)(AddChannelModalForm);
