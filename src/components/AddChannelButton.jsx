import React from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { open } from '../slices/modal';

const AddChannelButton = () => {
  const dispatch = useDispatch();
  const openHandle = () => {
    dispatch(open({ type: 'addChannel' }));
  };

  return (
    <Button className="mb-3" variant="outline-primary" block onClick={openHandle}>add channel</Button>
  );
};

export default AddChannelButton;
