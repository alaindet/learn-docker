import React from 'react';

import './goal-item.css';

export function GoalItem({
  id,
  text,
  onDelete,
}) {
  return (
    <li className="goal-item" onClick={() => onDelete.bind(id)}>
      {text}
    </li>
  );
}
