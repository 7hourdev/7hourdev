import React, { Component } from 'react';
import Header from './Header';

export default class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container ">
          <div className="row about-page">
            <div className="col-md-10 col-md-offset-1">
              <h1>About 7 Hour Development</h1>
              <p>
                7hourdev is a passion project aimed to provide clean and responsive websites for any organization. Since
                our inception in 2014, we've been able to help various companies and initiatives maintain a quality
                online presence.
              </p>
              <h3>Our Mission</h3>
              <p>
                To provide quality services and create clean, responsive websites for clients of all sizes with a focus
                on giving back to the community around us
              </p>
              <hr />
              <h1>Our Services</h1>
              <ul>
                <li>Web Services</li>
                <li>Front-End Design</li>
                <li>Graphics Design</li>
                <li>Photography</li>
                <li>Media Creation</li>
                <li>Website Maintanence</li>
              </ul>
              <hr />
              <h1>Our Team</h1>
              <p>
                Our team consists of students with a shared passion for UX, web development and meeting new people.
                Individually, each member has been involved in the communities around them since high school and loves
                to see initiatives grow to their full potential. Whether you are a business, organization or someone
                with an idea, we are always interested to learn more and find the best and cleanest solution for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
