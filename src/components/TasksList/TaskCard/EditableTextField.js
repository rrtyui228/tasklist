import React, {useState} from 'react';
import PropTypes from 'prop-types';
import s from '../TasksList.module.scss';
import {TextField} from 'shared';
import {Typography} from '@mui/material';

const EditableTextField = ({entity, header, className, placeholder, rowsCount}) => {
  const [taskEntity, setEntity] = useState(entity);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div
      className={className}
      onMouseEnter={() => setIsEdit(true)}
      onMouseLeave={() => setIsEdit(false)}
    >
      <Typography variant={'h5'} className={s.header}>
        {header}
      </Typography>
      <TextField
        rowsCount={rowsCount}
        placeholder={placeholder}
        isEdit={isEdit}
        value={taskEntity}
        setValue={setEntity}
      />
    </div>
  );
};

EditableTextField.propTypes = {
  rowsCount: PropTypes.number,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  entity: PropTypes.string,
  header: PropTypes.string
};

EditableTextField.defaultProps = {
  header: ''
};

export default EditableTextField;
