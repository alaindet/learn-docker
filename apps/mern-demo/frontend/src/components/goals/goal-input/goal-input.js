import React, { useState } from 'react';

import './goal-input.css';
import { Card } from '../../ui';

export function GoalInput({
  onAddGoal,
}) {

  const [enteredGoalText, setEnteredGoalText] = useState('');

  function updateGoalTextHandler(event) {
    setEnteredGoalText(event.target.value);
  }

  function goalSubmitHandler(event) {
    event.preventDefault();

    if (enteredGoalText.trim().length === 0) {
      alert('Invalid text - please enter a longer one!');
      return;
    }

    onAddGoal(enteredGoalText);

    setEnteredGoalText('');
  }

  return (
    <section id='goal-input'>
      <Card>
        <form onSubmit={goalSubmitHandler}>
          <label htmlFor='text'>Add a new goal</label>
          <input
            type='text'
            id='text'
            value={enteredGoalText}
            onChange={updateGoalTextHandler}
          />
          <button>Add goal</button>
        </form>
      </Card>
    </section>
  );
}
