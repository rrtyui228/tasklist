import React, {useState} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from '../TasksList.module.scss';
import {Checkbox, FormControlLabel, Typography, TextField} from '@mui/material';

const TaskCard = ({title, description, doneDate}) => {
  const [taskTitle, setTitle] = useState(title);
  const [taskDescription, setDescription] = useState(description);

  return (
    <div className={s.cardContainer}>
      <FormControlLabel
        control={<Checkbox />}
        label={'Is task completed'}
        className={cn(s.check, s.header)}
      />
      <div className={s.title}>
        <Typography variant={'h5'} className={s.header}>
          Title
        </Typography>
        <TextField
          fullWidth={true}
          autoFocus={true}
          value={taskTitle}
          variant={'standard'}
          onChange={(event) => setTitle(event.target.value)}
        />
        {taskTitle}
      </div>
      <div className={s.description}>
        <Typography variant={'h5'} className={s.header}>
          Description
        </Typography>
        <TextField
          fullWidth={true}
          autoFocus={true}
          value={taskDescription}
          variant={'standard'}
          onChange={(event) => setDescription(event.target.value)}
        />
        {taskDescription}
      </div>
      <div className={s.doneDate}>
        <Typography variant={'h5'} className={s.header}>
          Done date
        </Typography>
        {doneDate}
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  doneDate: PropTypes.string
};

TaskCard.defaultProps = {
  description: '',
  doneDate: ''
};

export default TaskCard;
