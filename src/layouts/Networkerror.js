import React from 'react';

const ErrorPage = ({ message }) => {
  return (
    <div>
      <h2>Error</h2>
      <p>{message}</p>
      {/* Additional styling or customization can be done here */}
    </div>
  );
};

export default ErrorPage;