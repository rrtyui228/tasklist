import React from 'react';
import s from 'components/TasksList/TasksList.module.scss';
import PropTypes from 'prop-types';
import {Typography} from '@mui/material';
import {Button} from 'shared';

const ModalHeader = ({clear, create}) => {
  return (
    <div className={s.modalHeader}>
      <Typography
        variant={'h5'}
        className={s.header}
      >
        Your tasks
      </Typography>

      <div className={s.buttons}>
        <Button
          size={'large'}
          view={'primary'}
          onClick={clear}
        >
          Clear empty tasks
        </Button>

        <Button
          variant={'contained'}
          size={'large'}
          view={'primary'}
          onClick={create}
        >
          Create task
        </Button>
      </div>
    </div>
  );
};

ModalHeader.propTypes = {
  clear: PropTypes.func,
  create: PropTypes.func
};

export default ModalHeader;
