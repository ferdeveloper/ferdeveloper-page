import React from 'react';
import Contact from './components/Contact/Contact';
import Content from './components/Content/Content';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="Index">
        <Contact />
        <Content />
      </div>
    );
  }
}
