import React from 'react';
import s from 'components/TasksList/TasksList.module.scss';
import PropTypes from 'prop-types';
import TaskCard from 'components/TasksList/TaskCard';

const TasksView = ({tasks, setField, deleteTask}) => {
  return (
    <div className={s.tasksWrapper}>
      {
        tasks.map(({title, description, doneDate, hash}) => {
          return (
            <TaskCard
              key={hash}
              hash={hash}
              title={title}
              description={description}
              doneDate={doneDate}
              setTaskField={setField}
              deleteTask={deleteTask}
            />
          );
        })
      }
    </div>
  );
};

TasksView.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  setField: PropTypes.func,
  deleteTask: PropTypes.func
};

export default TasksView;
