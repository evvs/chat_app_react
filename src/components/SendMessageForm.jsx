import React, { useContext, useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../slices/messages';
import { UserNameContext } from '../Context';
import ThrowNewErrorButton from './errors/ThrowErrorButton';

const SendMessageForm = () => {
  const dispatch = useDispatch();
  const currentChannel = useSelector((state) => state.channels.currentChannel);
  const userName = useContext(UserNameContext);
  const inputRef = useRef(null);
  const formik = useFormik({
    initialValues: {
      inputMessage: '',
    },
    onSubmit: async (values, { resetForm }) => {
      await dispatch(
        sendMessage({
          channelId: currentChannel,
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
          Send
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
        />
      </form>
      <ThrowNewErrorButton />
    </div>
  );
};

export default SendMessageForm;
