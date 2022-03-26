import React, {useState} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from '../TasksList.module.scss';
import EditableTextField from './EditableTextField';
import {Checkbox, FormControlLabel, Typography} from '@mui/material';

const TaskCard = ({title, description, doneDate}) => {
  const [done, setDone] = useState(doneDate);

  const setDoneDate = (isChecked) => setDone(isChecked ? new Date().toUTCString() : null);

  return (
    <div className={s.cardContainer}>
      <FormControlLabel
        control={<Checkbox/>}
        label={'Did you make it?'}
        className={cn(s.check, s.header)}
        checked={!!done}
        onChange={(event) => setDoneDate(event.target.checked)}
      />
      <EditableTextField
        placeholder={'Enter title'}
        entity={title}
        header={'Title'}
        className={s.title}
      />
      <EditableTextField
        placeholder={'Enter description'}
        entity={description}
        header={'Description'}
        className={s.description}
        rowsCount={7}
      />
      <div className={s.doneDate}>
        <Typography variant={'h5'} className={s.header}>
          Done date
        </Typography>
        {done}
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
