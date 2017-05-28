import React, { PropTypes } from 'react';

export default class PercentLines extends React.Component {

  static propTypes = {
    percentage: PropTypes.number.isRequired,
    showPercentageNumber: PropTypes.bool,
  }

  static defaultProps = {
    showPercentageNumber: true,
  }

  constructor(props) {
    super(props);
    this.initializeState();
  }

  getPercentage() {
    if (this.props.showPercentageNumber) {
      return `${this.props.percentage}%`;
    }

    return null;
  }

  initializeState() {
    this.state = {
      showPercent: this.props.showPercentageNumber,
    };
  }

  render() {
    return (
      <div className="PercentLines">
        <p>Holi</p>
        <div className="PercentLines-container">
          <div
            className="PercentLines-container-bar"
            style={{
              width: this.getPercentage(),
              background: '#FFFF00',
            }}
          />
        </div>
        <p>{this.getPercentage()}</p>
      </div>
    );
  }
}
