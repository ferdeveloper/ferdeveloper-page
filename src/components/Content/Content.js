import React from 'react';
import PercentLines from '../PercentLines/PercentLines';
import TabSelector from '../TabSelector/TabSelector';
import percentageData from '../../resources/data/mySkills.json';

export default class Content extends React.Component {

  getTabs = () => {
    const tabs = [
      {
        tabName: 'Sobre mí',
        component: <p>Holi!!!</p>,
      },
      {
        tabName: 'Skills',
        component: <p>Skills!!!</p>,
      },
    ];

    return tabs;
  }

  render() {
    return (
      <div className="Content" >
        <TabSelector
          tabs={this.getTabs()}
        />
        {/*
          <PercentLines
            percentageData={percentageData}
            textWidth={'100px'}
          />
        */}
      </div>
    );
  }
}
