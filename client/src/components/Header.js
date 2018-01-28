import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import CartSummary from "./CartSummary";
import "../styles/css/Header.css";
import { Modal, Navbar, NavItem, Badge } from "react-materialize";

class Header extends Component {
  componentDidMount() {}

  renderGoodontent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <NavItem key="3" className="black-text" href="/auth/google">
            <img
              src="/images/google.png"
              className="google-signin"
              height="32"
            />
          </NavItem>
        );
      default:
        return [
          <NavItem key="2" className="black-text" href="/Shop">
            Shop
          </NavItem>,
          <NavItem key="3" className="white-background" href="/account">
            My Account
          </NavItem>,
          <NavItem key="4" className="black-text" href="/cart">
            <CartSummary products={[]} />
          </NavItem>,
          <NavItem key="5" className="black-text" href="/api/logout">
            Logout
          </NavItem>
        ];
    }
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <NavItem key="3" className="black-text" href="/auth/google">
            <img
              src="/images/google.png"
              className="google-signin"
              height="32"
            />
          </NavItem>
        );
      default:
        return [
          <NavItem key="5" className="black-text" href="/api/logout">
            Logout
          </NavItem>
        ];
    }
  }

  render() {
    return (
      <Navbar className="brand-logo white" brand="Flo&apos;s Flowers" right>
        <Modal
          header="Contact Information"
          trigger={
            <NavItem key="1" className="black-text" href="/contact">
              Contact
            </NavItem>
          }
        >
          <p>
            <i class="fa fa-envelope" aria-hidden="true">
              &nbsp;<a
                href="mailto:flore.mckenzie@gmail.com?Subject=contact"
                target="_top"
              >
                flore.mckenzie@gmail.com
              </a>
            </i>
          </p>
          <p>
            <i class="fa fa-mobile" aria-hidden="true">
              &nbsp;02102262666
            </i>
          </p>
        </Modal>

        {this.renderContent()}
      </Navbar>
    );
  }
}

function mapStateToProps({ images, auth }) {
  return { auth: auth };
}

export default connect(mapStateToProps)(Header);
