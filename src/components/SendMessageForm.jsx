import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import * as reduxActions from '../actions';
import UserNameContext from './UserNameContex';

const mapDispatchToProps = { sendMessage: reduxActions.sendMessage };
const mapStateToProps = (state) => {
  const { channels: { currentChannel } } = state;
  return { currentChannel };
};

const SendMessageForm = (props) => {
  const author = useContext(UserNameContext);
  const { currentChannel, sendMessage } = props;

  const formik = useFormik({
    initialValues: {
      inputMessage: '',
    },
    onSubmit: (values, actions) => {
      console.log(values.inputMessage);
      sendMessage({ currentChannel, text: values.inputMessage, author });
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

export default connect(mapStateToProps, mapDispatchToProps)(SendMessageForm);
