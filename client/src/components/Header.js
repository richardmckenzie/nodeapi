import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import Cart from "./Cart";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a className="black-text" href="/auth/google">
              Login with google
            </a>
          </li>
        );
      default:
        return [
          <li key="2">
            <a className="black-text" href="/account">
              My Account
            </a>
          </li>,

          <li key="3">
            <a className="black-text" href="/cart">
              <Cart products={[]} />
            </a>
          </li>,
          <li key="3">
            <a className="black-text" href="/api/logout">
              Logout
            </a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav className="nav-extended white black-text">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center black-text headingfont">
            Flos Flower&apos;s{" "}
          </a>
          <a
            href="#"
            data-activates="mobile-demo"
            className="button-collapse right"
          >
            <i className="material-icons black-text">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a id="contactMenu" className="black-text" href="/contact">
                Contact
              </a>
            </li>
            <li>
              <a id="shopMenu" className="black-text" href="/shop">
                Shop
              </a>
            </li>
            {this.renderContent()}
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li>
              <a id="contactMenu" className="black-text" href="/contact">
                contact
              </a>
            </li>
            <li>
              <a id="shopMenu" className="black-text" href="/shop">
                Shop
              </a>
            </li>
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ images, auth }) {
  return { auth: auth };
}

export default connect(mapStateToProps)(Header);
