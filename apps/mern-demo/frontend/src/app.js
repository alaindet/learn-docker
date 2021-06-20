import React, { useState, useEffect } from 'react';

import { GoalInput, CourseGoals } from './components/goals';
import { ErrorAlert } from './components/ui';

const API_GOALS = 'http://localhost/goals';
const ERROR_FETCH = 'ERROR: Could not fetch goals from the server';
const ERROR_CREATE = 'ERROR: Could not create goal on the server';
const ERROR_DELETE = 'ERROR: Could not delete goal from the server';

export function App() {

  const [loadedGoals, setLoadedGoals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleRequest({ onStart, request, onFinish }) {
    try {
      onStart();
      await request();
      onFinish();
    } catch (error) {
      setError(err.message);
    }
  }

  // Fetch goals
  useEffect(function () {
    async function fetchData() {
      handleRequest({
        onStart: () => setIsLoading(true),
        request: async () => {
          const response = await fetch(API_GOALS);
          const resData = await response.json();
          if (!response.ok) {
            throw new Error(resData.message || ERROR_FETCH);
          }
          setLoadedGoals(resData.goals);
        },
        onFinish: () => setIsLoading(false),
      });
    }
    fetchData();
  }, []);

  // Create a new goal
  async function addGoalHandler(goalText) {
    handleRequest({
      onStart: () => setIsLoading(true),
      request: async () => {

        const body = JSON.stringify({ text: goalText });
        const headers = { 'Content-Type': 'application/json' };
        const requestOptions = { method: 'POST', body, headers };
        const response = await fetch(API_GOALS, requestOptions);
        const resData = await response.json();

        if (!response.ok) {
          throw new Error(resData.message || ERROR_CREATE);
        }

        setLoadedGoals(prevGoals => {
          const id = resData.goal.id;
          const text = goalText;
          const newGoal = { id, text };
          return [newGoal, ...prevGoals];
        });

      },
      onFinish: () => setIsLoading(false),
    });
  }

  // Delete an existing goal
  async function deleteGoalHandler(goalId) {
    handleRequest({
      onStart: () => setIsLoading(true),
      request: async () => {

        const url = `${API_GOALS}${goalId}`;
        const requestOptions = { method: 'DELETE' };
        const response = await fetch(url, requestOptions);
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message || ERROR_DELETE);
        }

        setLoadedGoals(oldGoals => {
          return oldGoals.filter(goal => goal.id !== goalId);
        });
      },
      onFinish: () => setIsLoading(false),
    });
  }

  return (
    <div>
      {error && <ErrorAlert errorText={error} />}
      <GoalInput onAddGoal={addGoalHandler} />
      {!isLoading && (
        <CourseGoals goals={loadedGoals} onDeleteGoal={deleteGoalHandler} />
      )}
    </div>
  );
}
