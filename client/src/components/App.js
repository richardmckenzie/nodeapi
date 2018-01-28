import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";

import { connect } from "react-redux";
import * as actions from "../actions";
import DashBoard from "../containers/DashBoard";
import MyAccount from "../containers/MyAccount";
import CartContainer from "../containers/CartContainer";
import Shop from "../containers/Shop";
import Main from "react-materialize";
import "../styles/css/App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    //this.props.fetchImages();
    this.props.getAllProducts();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <main />
            <Route exact path="/" component={DashBoard} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/cart" component={CartContainer} />
            <Route exact path="/account" component={MyAccount} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default connect(null, actions)(App);
