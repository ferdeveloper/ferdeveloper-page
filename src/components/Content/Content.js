import React from 'react';
import PercentLines from '../PercentLines/PercentLines';

export default class Content extends React.Component {

  render() {
    return (
      <div className="Content" >
        <PercentLines
          percentage="75"
        />
      </div>
    );
  }
}
