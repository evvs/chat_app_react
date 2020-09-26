import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { open } from '../slices/modal';

const AddChannelButton = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const openHandle = () => {
    dispatch(open({ type: 'addChannel' }));
  };

  return (
    <button type="button" className="btn btn-outline-primary mb-3 btn-sm" onClick={openHandle}>
      {t('buttons.addChannel')}
    </button>
  );
};

export default AddChannelButton;
