import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from '../TasksList.module.scss';
import EditableTextField from './EditableTextField';
import {Checkbox, FormControlLabel, Typography} from '@mui/material';

const TaskCard = ({task, setTaskField}) => {
  const {title, description, doneDate, hash} = task;

  const bindedSetField = setTaskField.bind(null, hash);

  const setTitle = (title) => bindedSetField(['title', title]);
  const setDescription = (description) => bindedSetField(['description', description]);
  const setDoneDate = (isChecked) => bindedSetField([
    'doneDate',
    isChecked ?
      new Date().toUTCString() :
      null
  ]);

  return (
    <div className={s.cardContainer}>
      <FormControlLabel
        control={<Checkbox/>}
        label={'Did you make it?'}
        className={cn(s.check, s.header)}
        checked={!!doneDate}
        onChange={(event) => setDoneDate(event.target.checked)}
      />
      <EditableTextField
        placeholder={'Enter title'}
        entity={title}
        setEntity={setTitle}
        header={'Title'}
        className={s.title}
      />
      <EditableTextField
        placeholder={'Enter description'}
        entity={description}
        setEntity={setDescription}
        header={'Description'}
        className={s.description}
        rowsCount={7}
      />
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
  task: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    hash: PropTypes.string,
    doneDate: PropTypes.string
  }),
  setTaskField: PropTypes.func
};

TaskCard.defaultProps = {
  task: {},
  description: '',
  doneDate: ''
};

export default TaskCard;
