import React, {useState} from 'react';
import s from '../TasksList.module.scss';
import {Typography} from '@mui/material';
import {Button} from 'shared';
import TaskCard from 'components/TasksList/TaskCard';
import {nanoid} from 'nanoid';

const Modal = () => {
  const [tasks, setTasks] = useState([]);

  const createTask = () => setTasks([
    ...tasks,
    {
      hash: nanoid(),
      title: '',
      description: '',
      doneDate: null
    }
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

    setTasks(filledTasks);
  };

  const setTaskField = (taskHash, [field, fieldValue]) => {
    const suitableTask = tasks.find(({hash}) => taskHash === hash);

    suitableTask[field] = fieldValue;

    setTasks([...tasks]);
  };

  return (
    <div className={s.container}>
      <div className={s.modal}>
        <div className={s.modalHeader}>
          <Typography variant={'h5'} className={s.header}>
            Your tasks
          </Typography>
          <div className={s.buttons}>
            <Button
              size={'large'}
              view={'primary'}
              onClick={clearEmptyTasks}
            >
              Clear empty tasks
            </Button>
            <Button
              variant={'contained'}
              size={'large'}
              view={'primary'}
              onClick={createTask}
            >
              Create task
            </Button>
          </div>
        </div>
        <div className={s.tasksWrapper}>
          {
            tasks.map((task) => {
              return (
                <TaskCard
                  key={task.hash}
                  task={task}
                  setTaskField={setTaskField}
                />
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Modal;
