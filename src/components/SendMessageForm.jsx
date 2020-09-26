import React, { useContext, useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../slices/messages';
import { UserNameContext } from '../Context';
import ThrowNewErrorButton from './errors/ThrowErrorButton';

const SendMessageForm = () => {
  const dispatch = useDispatch();
  const currentChannelId = useSelector((state) => state.channels.currentChannelId);
  const userName = useContext(UserNameContext);
  const inputRef = useRef(null);
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {
      inputMessage: '',
    },
    onSubmit: async (values, { resetForm }) => {
      await dispatch(
        sendMessage({
          channelId: currentChannelId,
          author: userName,
          text: values.inputMessage,
        }),
      );
      resetForm();
    },
  });

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div className="form-group mt-3">
      <form onSubmit={formik.handleSubmit} className="form-inline">
        <button
          type="submit"
          className="btn btn-primary ml-1"
          disabled={formik.isSubmitting}
        >
          {t('buttons.send')}
        </button>
        <input
          id="inputMessage"
          name="inputMessage"
          type="text"
          className="form-control w-75 ml-1"
          onChange={formik.handleChange}
          value={formik.values.inputMessage}
          ref={inputRef}
          disabled={formik.isSubmitting}
          required
          autoComplete="off"
        />
      </form>
      <ThrowNewErrorButton />
    </div>
  );
};

export default SendMessageForm;
