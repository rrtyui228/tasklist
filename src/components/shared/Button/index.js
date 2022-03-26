import React from 'react';
import PropTypes from 'prop-types';
import {Button as MaterialButton} from '@mui/material';

const Button = ({
  view,
  variant,
  children,
  endIcon,
  startIcon,
  fullWidth,
  size,
  onClick
}) => {
  return (
    <MaterialButton
      variant={variant}
      color={view}
      startIcon={startIcon}
      endIcon={endIcon}
      fullWidth={fullWidth}
      size={size}
      onClick={onClick}
    >
      {children}
    </MaterialButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  fullWidth: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  children: PropTypes.node,
  view: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'error',
    'info',
    'warning'
  ]),
  variant: PropTypes.oneOf([
    'contained',
    'outlined',
    'text'
  ]),
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large'
  ])
};

export default Button;
