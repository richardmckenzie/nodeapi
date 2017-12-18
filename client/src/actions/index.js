import axios from "axios";
import shop from "../api/shop";

import {
  FETCH_USER,
  RECEIVE_PRODUCTS,
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS
} from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const getAllProducts = () => async dispatch => {
  const res = await axios.get("/api/flowers");
  dispatch({ type: RECEIVE_PRODUCTS, payload: res.data });
};

const addToCartUnsafe = productId => ({
  type: ADD_TO_CART,
  productId
});

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId));
  }
};

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState();

  dispatch({
    type: CHECKOUT_REQUEST
  });
  shop.buyProducts(products, () => {
    dispatch({
      type: CHECKOUT_SUCCESS,
      cart
    });
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  });
};
