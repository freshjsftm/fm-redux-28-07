import React from 'react';
import TaskForm from '../components/Todo/TaskForm';
import TasksList from '../components/Todo/TasksList';

const TaskPage = () => {
  return (
    <>
      <TaskForm />
      <TasksList />
    </>
  );
}

export default TaskPage;
