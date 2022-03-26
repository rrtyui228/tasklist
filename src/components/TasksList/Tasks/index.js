import React, {useState} from 'react';
import s from '../TasksList.module.scss';
import TaskCard from '../TaskCard';

const Tasks = () => {
  const [tasks] = useState([{
    id: 1,
    title: 'Its my title and my task!',
    description: 'Desctiption must be some long long long textlong long lon' +
      'g textlong long long textlong long long textlong long long text',
    doneDate: new Date().toDateString()
  }, {
    id: 2,
    title: 'Its my title and my task!',
    description: 'Desctiption must be some long long long textlong long lon' +
      'g textlong long long textlong long long textlong long long text',
    doneDate: new Date().toDateString()
  }]);

  return (
    <div className={s.tasksWrapper}>
      {
        tasks.map(({id, title, description, doneDate}) => {
          return (
            <TaskCard
              key={id}
              title={title}
              description={description}
              doneDate={doneDate}
            />
          );
        })
      }
    </div>
  );
};

export default Tasks;
