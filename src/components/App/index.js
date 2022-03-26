import React from 'react';
import s from './App.module.scss';
import TasksListComponent from 'components/TasksList';
import Bubbles from 'components/Bubbles';

const App = () => {
  return (
    <>
      <Bubbles />
      <div className={s.page}>
        <TasksListComponent />
      </div>
    </>
  );
};

export default App;
