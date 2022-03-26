import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from '../TasksList.module.scss';
import EditableTextField from './EditableTextField';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {Checkbox, FormControlLabel, Typography} from '@mui/material';

const TaskCard = ({
  title,
  description,
  doneDate,
  hash,
  setTaskField,
  deleteTask
}) => {
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
        label={'Done?'}
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
        rowsCount={5}
      />
      <EditableTextField
        placeholder={'Enter description'}
        entity={description}
        setEntity={setDescription}
        header={'Description'}
        className={s.description}
        rowsCount={10}
      />
      {
        doneDate && (
          <div className={s.doneDate}>
            <Typography variant={'h5'} className={s.header}>
              Done date
            </Typography>
            {doneDate}
          </div>
        )
      }
      <DeleteForeverIcon
        onClick={() => deleteTask(hash)}
        className={s.icon}
      />
    </div>
  );
};

TaskCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  hash: PropTypes.string,
  doneDate: PropTypes.string,
  setTaskField: PropTypes.func,
  deleteTask: PropTypes.func
};

TaskCard.defaultProps = {
  description: '',
  doneDate: ''
};

export default TaskCard;
