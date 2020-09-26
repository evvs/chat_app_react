import React from 'react';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { throwTestError } from '../../slices/messages';

const ThrowNewErrorButton = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const clickHandler = () => {
    dispatch(throwTestError('https://qweqwrqwr.wer'));
  };
  return (
    <Button variant="danger" className="mt-1" onClick={clickHandler}>
      {t('buttons.throwAnError')}
    </Button>
  );
};

export default ThrowNewErrorButton;
