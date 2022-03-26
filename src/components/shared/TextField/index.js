import React from 'react';
import PropTypes from 'prop-types';
import s from './TextField.module.scss';
import {Collapse} from 'shared';
import {TextField as MaterialTextField} from '@mui/material';
import {createOverride, Theme, styles} from 'styles';

const TextField = ({
  value,
  setValue,
  placeholder,
  required,
  isEdit,
  rowsCount
}) => {
  const theme = createOverride('MuiInput', {
    root: {
      color: styles.grayOne
    }
  });

  return isEdit ? (
    <Theme theme={theme}>
      <MaterialTextField
        maxRows={rowsCount}
        required={required}
        placeholder={placeholder}
        multiline={true}
        fullWidth={true}
        autoFocus={true}
        value={value}
        variant={'standard'}
        onChange={(event) => setValue(event.target.value)}
      />
    </Theme>
  ) : (
    <Collapse linesCount={rowsCount}>
      <div className={s.read}>
        {value}
      </div>
    </Collapse>
  );
};

TextField.propTypes = {
  rowsCount: PropTypes.number,
  isEdit: PropTypes.bool,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func
};

TextField.defaultProps = {
  placeholder: 'Enter value',
  rowsCount: 3
};

export default TextField;
