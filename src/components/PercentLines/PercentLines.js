import React, { PropTypes } from 'react';

export default class PercentLines extends React.Component {

  static propTypes = {
    showPercent: PropTypes.bool,
  }

  static defaultProps = {
    showPercent: true,
  }

  constructor(props) {
    super(props);
    this.initializeState();
  }

  getPercent() {
    if (this.props.showPercent) {
      return '89%';
    }

    return null;
  }

  initializeState() {
    this.state = {
      showPercent: this.props.showPercent,
    };
  }

  render() {
    return (
      <div className="PercentLines">
        <p>Holi</p>
        <div className="PercentLines-container">
          <div className="PercentLines-container-bar" />
        </div>
        <p>{this.getPercent()}</p>
      </div>
    );
  }
}
