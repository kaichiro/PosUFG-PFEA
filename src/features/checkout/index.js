import React from "react";
import { connect } from "react-redux";

import Cart from "../cart";
import CheckoutForm from "./form";

function submitOrder(values, cart) {
  const { email, name } = values.order;
}

function Checkout(props) {
  const { cart } = props;
  return (
    <div>
      <div style={{ border: "1px solid black" }}>
        <Cart />
      </div>
      <CheckoutForm onSubmit={values => submitOrder(values, cart)} />
    </div>
  );
}

function mapStateToProps(state) {
  return { cart: state.cart };
}

export default connect(mapStateToProps)(Checkout);
