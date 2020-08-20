import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik';
import { close } from '../../slices/modal';

const mapActionsToProps = { closeModal: close };

const AddChannelModalForm = (props) => {
  const { closeModal } = props;

  const handleClose = () => {
    closeModal();
  };

  const formik = useFormik({
    initialValues: {
      channel: '',
    },
    onSubmit: values => {
      console.log('success')
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
