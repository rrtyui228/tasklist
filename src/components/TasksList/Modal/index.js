import React, {useState} from 'react';
import {cloneDeep, isEqual} from 'lodash';
import {nanoid} from 'nanoid';
import s from 'components/TasksList/TasksList.module.scss';
import ModalHeader from 'components/TasksList/Modal/ModalHeader';
import TasksView from 'components/TasksList/Modal/TasksView';

const Modal = () => {
  const [tasks, setTasks] = useState([]);

  const createTask = () => setTasks((otherTasks) => [
    {
      hash: nanoid(),
      title: '',
      description: '',
      doneDate: null
    },
    ...otherTasks
  ]);

  const clearEmptyTasks = () => {
    if (!tasks.length) {
      return;
    }

    const filledTasks = tasks.filter(({
      title,
      description,
      doneDate
    }) => title || description || doneDate);

    if (tasks.length === filledTasks.length) {
      return;
    }

    setTasks(filledTasks);
  };

  const setTaskField = (taskHash, [field, fieldValue]) => {
    const copiedTasks = cloneDeep(tasks);
    const suitableTask = copiedTasks.find(({hash}) => taskHash === hash);

    suitableTask[field] = fieldValue;

    if (isEqual(tasks, copiedTasks)) {
      return;
    }

    setTasks([...copiedTasks]);
  };

  const deleteTask = (deleteHash) =>
    setTasks((prevTasks) => prevTasks
      .filter(({hash}) => deleteHash !== hash));

  return (
    <div className={s.container}>
      <div className={s.modal}>
        <ModalHeader
          create={createTask}
          clear={clearEmptyTasks}
        />

        <TasksView
          tasks={tasks}
          setField={setTaskField}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
};

export default Modal;
