import React, {useEffect, useRef} from 'react';
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
  const inputEl = useRef(null);
  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      id: clickedElemId,
      channelName: '',
    },
    onSubmit: (values) => {
      renameChannelAsync({
        id: clickedElemId,
        name: values.channelName,
      });
      console.log('success', values.channelName);
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
          Rename
        </Button>
      </Modal.Footer>
    </form>
  );
};

export default connect(mapStateToProps, mapActionsToProps)(AddChannelModalForm);
