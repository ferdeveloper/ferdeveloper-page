import React from 'react';
import Social from '../Social/Social';
import fer from '../../resources/ferdeveloper.jpg';
import './Contact.styl';

export default class Contact extends React.Component {

  render() {
    return (
      <div className="Contact" >
        <img
          src={fer}
          alt="ferdeveloper"
        />
        <h1>Fernando Arenas</h1>
        <h2>Frontend & Mobile Developer</h2>
        <p>Rainwob king, God Designer and Frontend Minion.</p>
        <Social />
      </div>
    );
  }
}
