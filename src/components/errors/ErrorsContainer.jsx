import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ currentErrors: state.errors });

const Error = (props) => {
  const { text } = props;
  return <div className="bg-danger p-3 mb-2 ml-1 rounded text-white">{text}</div>;
};

const ErrorContainer = (props) => {
  const { currentErrors } = props;

  return (
    <div className="errors-container">
      {currentErrors.map(({ id, text }) => <Error key={id} text={text} />)}
    </div>
  );
};

export default connect(mapStateToProps)(ErrorContainer);
