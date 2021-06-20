import React from 'react';

import './loading-spinner.css';

export function LoadingSpinner() {
  return (
    <div class='lds-ring'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
