import React from 'react';

import './course-goals.css';
import { Card } from '../../ui';
import { GoalItem } from '../goal-item/goal-item';

export function CourseGoals({
  goals,
  onDeleteGoal,
}) {

  const hasNoGoals = !goals || goals.length === 0;

  return (
    <section id='course-goals'>
      <Card>
        {hasNoGoals && <p>No goals found. Start adding some!</p>}
        <ul>
          {goals.map((goal) => (
            <GoalItem
              key={goal.id}
              id={goal.id}
              text={goal.text}
              onDelete={onDeleteGoal}
            />
          ))}
        </ul>
        {!hasNoGoals && <p>Click on items to delete them</p>}
      </Card>
    </section>
  );
}
