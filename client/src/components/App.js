import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import { connect } from "react-redux";
import * as actions from "../actions";
import DashBoard from "../containers/DashBoard";
import MyAccount from "../containers/MyAccount";
import CartContainer from "../containers/CartContainer";
import Shop from "../containers/Shop";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchImages();
    this.props.getAllProducts();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={DashBoard} />
            <Route exact path="/shop" component={DashBoard} />
            <Route exact path="/cart" component={CartContainer} />
            <Route exact path="/account" component={MyAccount} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
