import React from 'react';

import './goal-item.css';

export function GoalItem({
  id,
  text,
  onDelete,
}) {
  return (
    <li className="goal-item" onClick={() => onDelete(id)}>
      <span className="goal-item__text">{text}</span>
      <span className="goal-item__dismiss">&times;</span>
    </li>
  );
}
