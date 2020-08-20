import React from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { sendMessage } from '../slices/messages';

const mapActionsToProps = {
  sendMessageAsync: sendMessage,
};
const mapStateToProps = ({ channels: { currentChannel } }) => ({ currentChannel });

const SendMessageForm = (props) => {
  const { sendMessageAsync, currentChannel } = props;

  const formik = useFormik({
    initialValues: {
      inputMessage: '',
    },
    onSubmit: (values, actions) => {
      console.log(values.inputMessage);
      sendMessageAsync({
        channelId: currentChannel,
        author: 'Me',
        text: values.inputMessage,
      });
      actions.resetForm();
    },
  });

  return (
    <div className="form-group mt-3">
      <form onSubmit={formik.handleSubmit} className="form-inline">
        <button type="submit" className="btn btn-primary ml-1">Send</button>
        <input
          id="inputMessage"
          name="inputMessage"
          type="text"
          className="form-control w-75 ml-1"
          onChange={formik.handleChange}
          value={formik.values.inputMessage}
          required
        />
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapActionsToProps)(SendMessageForm);
