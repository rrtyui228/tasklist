import React from 'react';
import {nanoid} from 'nanoid';
import s from './Bubbles.module.scss';
import {styles} from 'styles';

const Bubbles = () => {
  const bubblesCount = Number(styles.bubblesCount || 50);
  const bubblesCountArray = Array(bubblesCount).fill(0);

  return (
    <div className={s.bubbles}>
      {
        bubblesCountArray.map(() => (
          <div key={nanoid()} className={s.bubble}/>
        ))
      }
    </div>
  );
};

export default Bubbles;
