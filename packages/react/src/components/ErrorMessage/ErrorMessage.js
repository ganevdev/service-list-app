import './error-message.css';

import React from 'react';

function ErrorMessage({ onClick }) {
  return (
    <div className="error-message">
      <div>
        <div>
          Произошла ошибка!
          <button onClick={onClick}>Повторить запрос</button>
        </div>
      </div>
    </div>
  );
}

export default ErrorMessage;
