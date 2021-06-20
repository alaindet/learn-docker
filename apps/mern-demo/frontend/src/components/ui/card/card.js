import React from 'react';

import './Card.css';

export function Card({ children }) {
  return (
    <div className='card'>
      {children}
    </div>
  );
}
