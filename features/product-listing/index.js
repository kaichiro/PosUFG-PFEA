import React from "react";
import { connect } from "react-redux";

import fetchApi from "../../modules/fetch-api";
import { ACTIONS_CONST } from "../../utils/utils";
import ProductListItem from "./product-list-item";

class ProductListing extends React.Component {
  componentDidMount() {
    const { loadProducts } = this.props;

    fetchApi("get", "http://localhost:3003/Products/").then(json => {
      loadProducts(json);
    });
  }

  render() {
    const { addToCart, removeFromCart, products, cart } = this.props;
    return (
      <div>
        <div className="product-listing">
          {products
            .map((product, index) => (
              <ProductListItem
                key={index}
                className="ui link cards"
                product={product}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cartItem={
                  cart.filter(cartItem => cartItem.id === product.id)[0]
                }
              />
            ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cart: state.cart, products: state.products };
}

function mapDispatchToProps(dispatch) {
  return {
    loadProducts: products => {
      dispatch({ type: ACTIONS_CONST.LOAD, payload: products });
    },
    addToCart: item => {
      dispatch({ type: ACTIONS_CONST.ADD, payload: item });
    },
    removeFromCart: item => {
      dispatch({ type: ACTIONS_CONST.REMOVE, payload: item });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListing);
