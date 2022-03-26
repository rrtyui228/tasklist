import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import s from './Collapse.module.scss';

class Collapse extends Component {
  constructor(props) {
    super(props);

    this.maxClientHeight = this.props.lineHeight * this.props.linesCount;
    this.anchorElement = createRef();
    this.state = {
      isExpanded: false
    };
  }

  get isOverflowed() {
    return this.state.exceededLimit && !this.state.isExpanded;
  }

  componentDidMount() {
    this.setLimitExceeded(this.anchorElement.current?.offsetHeight > this.maxClientHeight);
  }

  setLimitExceeded = (option) => {
    this.setState({exceededLimit: option});
  };

  setExpand = () => {
    this.setState((state) => {
      return {
        isExpanded: !state.isExpanded
      };
    });
  };

  render() {
    const {children, linesCount} = this.props;

    return (
      <React.Fragment>
        <div
          className={this.isOverflowed ? s.overflowed : undefined}
          style={
            linesCount === 1 ?
              {display: 'block'} :
              {
                lineClamp: linesCount,
                WebkitLineClamp: linesCount
              }
          }
          ref={this.anchorElement}
        >
          {children}
        </div>
      </React.Fragment>
    );
  }
}

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
