import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import s from './Collapse.module.scss';

const Collapse = ({lineHeight, linesCount, children}) => {
  const [exceededLimit, setLimitExceeded] = useState(false);
  const anchorElement = useRef(null);
  const maxClientHeight = lineHeight * linesCount;

  useEffect(() => {
    setLimitExceeded(anchorElement.current?.offsetHeight > maxClientHeight);
  }, []);

  return (
    <React.Fragment>
      <div
        className={exceededLimit ? s.overflowed : undefined}
        style={
          linesCount === 1 ?
            {display: 'block'} :
            {
              lineClamp: linesCount,
              WebkitLineClamp: linesCount
            }
        }
        ref={anchorElement}
      >
        {children}
      </div>
    </React.Fragment>
  );
};

Collapse.propTypes = {
  children: PropTypes.node,
  linesCount: PropTypes.number,
  lineHeight: PropTypes.number
};

Collapse.defaultProps = {
  linesCount: 3,
  lineHeight: 20
};

export default Collapse;
