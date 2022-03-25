import React, {useEffect} from 'react';
import {Provider} from 'mobx-react';
import TaskListStore from 'stores/TaskList';
import s from './App.module.scss';
import TasksListComponent from 'components/TasksList';
import Bubbles from 'components/Bubbles';

const App = () => {
  const TaskList = new TaskListStore();

  useEffect(() => () => TaskList.unmount());

  return (
    <>
      <Bubbles />
      <div className={s.page}>
        <Provider TaskListStore={TaskList}>
          <TasksListComponent />
        </Provider>
      </div>
    </>
  );
};

export default App;
