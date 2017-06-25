import React, { PropTypes } from 'react';
import './TabSelector.styl';

export default class TabSelector extends React.Component {
  /* eslint no-restricted-syntax: ["error", "WithStatement",
   "BinaryExpression[operator='in']"] */
  static propTypes = {
    tabs: PropTypes.array.isRequired,
  }

  getTabs = () => {
    for (const tabs in this.propTypes.tabs) {
      if (tabs === 1) {
          console.log(tabs);
      }
    }

    return (
      <p>'asdf'</p>
    );
  }

  render() {
    return (
      <div className="TabSelector" >
        {this.getTabs()}
      </div>
    );
  }
}
