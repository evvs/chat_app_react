import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteChannel } from '../../slices/channels';
import { close } from '../../slices/modal';

const DeleteChannelModal = () => {
  const dispatch = useDispatch();
  const clickedElemId = useSelector((state) => state.modal.clickedElemId);
  const clickedElemName = useSelector((state) => state.modal.clickedElemName);
  const { t } = useTranslation();

  const handleClose = () => {
    dispatch(close());
  };

  const handleDelete = async () => {
    await dispatch(deleteChannel(clickedElemId));
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title><span className="text-danger">{t('modals.deleteChannel.header')}</span></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {t('modals.deleteChannel.description', { clickedElemName })}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {t('buttons.cancel')}
        </Button>
        <Button variant="primary" onClick={handleDelete}>
          {t('buttons.delete')}
        </Button>
      </Modal.Footer>
    </>
  );
};

export default DeleteChannelModal;
