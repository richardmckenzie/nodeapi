import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import Cart from "./Cart";
import "../styles/css/Header.css";
import { Navbar, NavItem, Badge } from "react-materialize";

class Header extends Component {
  componentDidMount() {}

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <NavItem className="black-text" href="/auth/google">
            Login with google
          </NavItem>
        );
      default:
        return [
          <NavItem className="white-background" href="/account">
            My Account
          </NavItem>,
          <NavItem className="black-text" href="/cart">
            <Cart products={[]} />
          </NavItem>,
          <NavItem className="black-text" href="/api/logout">
            Logout
          </NavItem>
        ];
    }
  }

  render() {
    return (
      <Navbar className="brand-logo white" brand="Flos Flower&apos;s" right>
        <NavItem className="black-text" href="/contact">
          Contact
        </NavItem>
        <NavItem className="black-text" href="/Shop">
          Shop
        </NavItem>
        {this.renderContent()}
      </Navbar>
    );
  }
}

function mapStateToProps({ images, auth }) {
  return { auth: auth };
}

export default connect(mapStateToProps)(Header);
