import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div className="container footer">
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <h3>7hourdev</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 col-md-offset-1">
            <p>
              <Link to="/contact">Contact Us</Link>
            </p>
            <p>
              <Link to="/join">Join Us</Link>
            </p>
            <p>
              <Link to="/testimonial">Testimonials</Link>
            </p>
          </div>
          <div className="col-md-5">
            <p>
              <Link to="/privacy">Privacy Statement</Link>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <h6>Designed by 7hourdev © 2016</h6>
          </div>
        </div>
      </div>
    );
  },
});
