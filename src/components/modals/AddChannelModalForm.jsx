import React, {useEffect, useRef} from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik';
import { close } from '../../slices/modal';
import { addNewChannel } from '../../slices/channels';

const mapActionsToProps = { closeModal: close, addNewChannelAsync: addNewChannel };

const AddChannelModalForm = (props) => {
  const { closeModal, addNewChannelAsync } = props;

  const inputEl = useRef(null);
  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const handleClose = () => {
    closeModal();
  };

  const formik = useFormik({
    initialValues: {
      channelName: '',
    },
    onSubmit: (values) => {
      addNewChannelAsync({
        name: values.channelName,
      });
      console.log('success', values.channelName);
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
          id="channelName"
          name="channelName"
          type="text"
          ref={inputEl}
          onChange={formik.handleChange}
          value={formik.values.channelName}
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
