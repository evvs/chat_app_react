import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik';
import { close } from '../../slices/modal';
import { addNewChannel } from '../../slices/channels';

const mapActionsToProps = { closeModal: close, addNewChannelAsync: addNewChannel };

const AddChannelModalForm = (props) => {
  const { closeModal, addNewChannelAsync } = props;

  const handleClose = () => {
    closeModal();
  };

  const formik = useFormik({
    initialValues: {
      channel: '',
    },
    onSubmit: (values) => {
      addNewChannelAsync({
        name: values.channel,
      });
      console.log('success', values.channel);
    },
  });
  return (
  <form onSubmit={formik.handleSubmit}>
      <Modal.Header closeButton>
        <Modal.Title>ADD CHANNEL</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label htmlFor="email">Channel name: </label>
        <input
          className="form-control"
          id="channel"
          name="channel"
          type="text"
          required
          onChange={formik.handleChange}
          value={formik.values.channel}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Modal.Footer>
</form>
  );
};

export default connect(null, mapActionsToProps)(AddChannelModalForm);
