import React from 'react';
import Header from '../Header';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container home-content">
          <h1>Under Construction.</h1>
          <p>One day I'll update this website</p>
          <p>This is really just a place where I drop off side projects.</p>
        </div>
      </div>
    );
  }
}
