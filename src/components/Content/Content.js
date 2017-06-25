import React from 'react';
import PercentLines from '../PercentLines/PercentLines';
import percentageData from '../../resources/data/mySkills.json';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class Content extends React.Component {

  getPercentLines() {
    return (
      <PercentLines
        percentageData={percentageData}
        textWidth={'100px'}
      />
    );
  }

  getTabs = () => {

    const tabs = [
      {
        name: 'Sobre mí',
        component: <p>Holi!!!</p>,
      },
      {
        name: 'Skills',
        component: this.getPercentLines(),
      },
    ];

    return (
      <Tabs>
        <TabList>
          <Tab>{'Sobre mí'}</Tab>
          <Tab>{'Skills'}</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          {this.getPercentLines()}
        </TabPanel>
      </Tabs>
    );
  }

  render() {
    return (
      <div className="Content" >
        {this.getTabs()}
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
