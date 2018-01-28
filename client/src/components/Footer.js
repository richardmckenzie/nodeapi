import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/css/Footer.css";
import { Footer as MaterializeFooter } from "react-materialize";
import Privacy from "./Privacy";
import { Modal } from "react-materialize";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <MaterializeFooter
          copyrights="&copy; 2018 Flo's Flowers. All rights reserved"
          links={
            <ul>
              <li>
                <div>
                  <a
                    className="white-text"
                    href="https://www.instagram.com/flosflowersnz"
                  >
                    <i className="fa fa-instagram fa-2x" aria-hidden="true" />
                  </a>
                  <a
                    className="white-text"
                    href="https://www.instagram.com/flosflowersnz"
                  >
                    <i
                      className="fa fa-facebook-official fa-2x"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </li>
              <li>
                <a className="white-text text-lighten-3" href="#!">
                  Privacy Policy
                </a>
              </li>
            </ul>
          }
          className="blue-grey lighten-2"
        >
          <h5 className="white-text">Kapiti Coast, New Zealand</h5>
        </MaterializeFooter>
      </div>
    );
  }
}
