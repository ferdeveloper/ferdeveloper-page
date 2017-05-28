import React from 'react';
import PercentLines from '../PercentLines/PercentLines';
import percentageData from '../../resources/data/mySkills.json';

export default class Content extends React.Component {

  render() {
    return (
      <div className="Content" >
        <PercentLines
          percentageData={percentageData}
          textWidth={'100px'}
        />
      </div>
    );
  }
}
