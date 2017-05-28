import React, { PropTypes } from 'react';

export default class PercentLines extends React.Component {

  static propTypes = {
    percentageData: PropTypes.array.isRequired,
    showPercentageNumber: PropTypes.bool,
  }

  static defaultProps = {
    showPercentageNumber: true,
  }

  constructor(props) {
    super(props);
    this.initializeState();
  }

  getPercentage(percentage) {
    if (this.props.showPercentageNumber) {
      return `${percentage}%`;
    }

    return null;
  }

  getObject = (object) => {
    const percentage = this.getPercentage(object.percentage);
    return (
      <div className="PercentLines-block">
        <p
          className="PercentLines-block-text"
          style={{
            width: '100px',
          }}
        >
          {object.name}
        </p>
        <div className="PercentLines-block-barContainer">
          <div
            className="PercentLines-block-barContainer-bar"
            style={{
              width: percentage,
              background: '#29D8F2',
            }}
          />
        </div>
        <p
          className="PercentLines-block-percentage"
        >
          {percentage}
        </p>
      </div>
    );
  }

  getObjectsBlock() {
    return this.props.percentageData.map(this.getObject);
  }

  initializeState() {
    this.state = {
      showPercent: this.props.showPercentageNumber,
    };
  }

  render() {
    return (
      <div className="PercentLines">
        {this.getObjectsBlock()}
      </div>
    );
  }
}
