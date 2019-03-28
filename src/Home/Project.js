import React from 'react';
import URL from '../helper/url';

export default class Project extends React.Component {
  render() {
    var items = [];
    this.props.tags.split(',').forEach(function(item) {
      items.push(
        <p key={item} className="tag">
          {item}
        </p>
      );
    });
    return (
      <div className="project-item" style={{ backgroundImage: 'url(' + URL(this.props.img) + ')' }}>
        <div className="overlay" />
        <div className="overlay-2" />
        <h1>{this.props.title}</h1>
        <p>{this.props.desc}</p>
        <i className="material-icons">keyboard_arrow_right</i>
      </div>
    );
  }
}
