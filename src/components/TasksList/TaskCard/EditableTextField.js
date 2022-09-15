import React, {useState} from 'react';
import PropTypes from 'prop-types';
import s from '../TasksList.module.scss';
import {TextField} from 'shared';
import {Typography} from '@mui/material';
import cn from 'classnames';

const EditableTextField = ({
  entity,
  setEntity,
  header,
  className,
  placeholder,
  rowsCount
}) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div
      className={cn(className, s.textWrapper)}
      onMouseEnter={() => setIsEdit(true)}
      onMouseLeave={() => setIsEdit(false)}
    >
      <Typography
        variant={'h5'}
        className={s.header}
      >
        {header}
      </Typography>

      <TextField
        rowsCount={rowsCount}
        placeholder={placeholder}
        isEdit={isEdit}
        value={entity}
        setValue={setEntity}
      />
    </div>
  );
};

EditableTextField.propTypes = {
  setEntity: PropTypes.func,
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
