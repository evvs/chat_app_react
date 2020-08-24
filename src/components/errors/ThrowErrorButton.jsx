import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { throwTestError } from '../../slices/messages';

const mapActionsToProps = { throwErr: throwTestError };

const ThrowNewErrorButton = (props) => {
  const { throwErr } = props;
  const clickHandler = () => {
    throwErr('https://qweqwrqwr.wer');
  };
  return <Button variant="danger" className="mt-1" onClick={clickHandler}>Throw an error</Button>;
};

export default connect(null, mapActionsToProps)(ThrowNewErrorButton);
