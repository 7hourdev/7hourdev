import React from 'react';
import Logo from '../assets/logo.png';
export default class HomeHeader extends React.Component {
  render() {
    return (
      <div className="home-header" ref={ref => (this.header = ref)}>
        <div className="container">
          <div className="row">
            <img src={Logo} alt="7hourdev" />
            <h1>
              7 <strong>HOUR</strong> DEVELOPMENT
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
