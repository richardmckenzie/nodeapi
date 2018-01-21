import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/css/Footer.css";
import { Footer as Footing } from "react-materialize";

export default class Footer extends Component {
  render() {
    return (
      <Footing
        copyrights="&copy; 2018 Flos Flower&apos;s All rights reserved"
        moreLinks={
          <a className="grey-text text-lighten-4 right" href="#!">
            More Links
          </a>
        }
        links={
          <ul>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                Link 1
              </a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                Link 2
              </a>
            </li>
          </ul>
        }
        className="example"
      >
        <h5 className="white-text">Footer Content</h5>
        <p className="grey-text text-lighten-4">
          You can use rows and columns here to organize your footer content.
        </p>
      </Footing>
    );
  }
}
