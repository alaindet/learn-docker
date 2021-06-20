import React from 'react';

import './LoadingSpinner.css';

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
