import React from 'react';
import s from '../TasksList.module.scss';
import Tasks from '../Tasks';
import {Typography} from '@mui/material';

const Modal = () => {
  return (
    <div className={s.container}>
      <div className={s.modal}>
        <div className={s.modalHeader}>
          <Typography variant={'h5'} className={s.header}>
            Your tasks
          </Typography>
        </div>
        <Tasks />
      </div>
    </div>
  );
};

export default Modal;
