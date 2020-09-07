import React from 'react';
import { useSelector } from 'react-redux';

const Error = (props) => {
  const { text } = props;
  return <div className="bg-danger p-3 mb-2 ml-1 rounded text-white">{text}</div>;
};

const ErrorContainer = () => {
  const currentErrors = useSelector((state) => state.errors);

  return (
    <div className="errors-container">
      {currentErrors.map(({ id, text }) => <Error key={id} text={text} />)}
    </div>
  );
};

export default ErrorContainer;
