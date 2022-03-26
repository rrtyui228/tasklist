import React from 'react';
import {nanoid} from 'nanoid';
import s from './Bubbles.module.scss';
import {styles} from 'styles';

const DEFAULT_COUNT = 50;

const Bubbles = () => {
  const bubblesCount = Number(styles.bubblesCount || DEFAULT_COUNT);
  const bubblesCountArray = Array(bubblesCount)
    .fill(0)
    .map(() => nanoid());

  return (
    <div className={s.bubbles}>
      {
        bubblesCountArray.map((hash) => (
          <div key={hash} className={s.bubble}/>
        ))
      }
    </div>
  );
};

export default Bubbles;
