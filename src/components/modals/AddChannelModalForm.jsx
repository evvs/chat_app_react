import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik';
import { close } from '../../slices/modal';
import { addNewChannel } from '../../slices/channels';

const AddChannelModalForm = () => {
  const dispatch = useDispatch();

  const inputEl = useRef(null);
  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const handleClose = () => {
    dispatch(close());
  };

  const formik = useFormik({
    initialValues: {
      channelName: '',
    },
    onSubmit: async (values) => {
      await dispatch(addNewChannel({
        name: values.channelName,
      }));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Modal.Header closeButton>
        <Modal.Title>ADD CHANNEL</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label htmlFor="channelName" className="d-block">
          Channel name:
          <input
            className="form-control"
            id="channelName"
            name="channelName"
            type="text"
            ref={inputEl}
            required
            onChange={formik.handleChange}
            value={formik.values.channelName}
          />
        </label>
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

export default AddChannelModalForm;
