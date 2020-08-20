import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { open } from '../slices/modal';

const mapActionsToProps = { openModal: open };

const AddChannelButton = (props) => {
  const { openModal } = props;
  const openHandle = () => {
    openModal({ type: 'addChannel' });
  };

  return (
    <Button className="mb-3" variant="outline-primary" block onClick={openHandle}>add channel</Button>
  );
};

export default connect(null, mapActionsToProps)(AddChannelButton);
