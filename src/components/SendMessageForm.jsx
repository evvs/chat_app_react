import React from 'react';
import { useFormik } from 'formik';

const SendMessageForm = () => {
  const formik = useFormik({
    initialValues: {
      inputMessage: '',
    },
    onSubmit: (values, actions) => {
      console.log(values.inputMessage);
      actions.resetForm();
    },
  });

  return (
    <div className="form-group">
      <form onSubmit={formik.handleSubmit} className="form-inline">
        <button type="submit" className="btn btn-primary">Send</button>
        <input
          id="inputMessage"
          name="inputMessage"
          type="text"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.inputMessage}
        />
      </form>
    </div>
  );
};

export default SendMessageForm;
