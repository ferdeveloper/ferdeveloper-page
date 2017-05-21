import React, { PropTypes } from 'react';

export default class PercentLines extends React.Component {

  static propTypes = {
    showPercent: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.initializeState();
  }

  initializeState() {
    this.state = {
      showPercent: this.props.showPercent,
    };
  }

  render() {
    return (
      <div className="PercentLines" >
        <p>Holi</p>
      </div>
    );
  }
}
