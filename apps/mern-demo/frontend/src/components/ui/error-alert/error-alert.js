import React from 'react';

import './ErrorAlert.css';

export function ErrorAlert(props) {
  return (
    <section className='error-alert'>
      <h2>Something went wrong!</h2>
      <p>{props.errorText}</p>
    </section>
  );
}
