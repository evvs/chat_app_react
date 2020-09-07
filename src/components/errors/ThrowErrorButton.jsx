import React from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { throwTestError } from '../../slices/messages';

const ThrowNewErrorButton = () => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(throwTestError('https://qweqwrqwr.wer'));
  };
  return <Button variant="danger" className="mt-1" onClick={clickHandler}>Throw an error</Button>;
};

export default ThrowNewErrorButton;
