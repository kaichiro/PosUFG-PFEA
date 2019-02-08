import React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";

import fetchApi from "../../modules/fetch-api";
import {
  ACTIONS_CONST,
  converteFloatMoeda,
  returnPlots,
  ROUTERS_CONST
} from "../../utils/utils";
import { Card, Image, Icon, Button, Segment } from "semantic-ui-react";
import AddButton from "./add-btn";
import RemoveButton from "./remove-btn";

// const divStyle = { padding: 7, width: 200 };
const divImage = { height: 180, width: 180, align: "center" };

const divDescription = { height: 50 };

class ProductTopSalling extends React.Component {
  componentDidMount() {
    const { loadProducts } = this.props;
    fetchApi("get", "http://localhost:3003/Products?topSelling=1").then(
      json => {
        loadProducts(json);
      }
    );
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 2000
    };

    const { addToCart, removeFromCart, products, cart } = this.props;

    return (
      <Segment /*style={divStyle}*/>
        <Segment>
          <h4>{this.props.obs}</h4>
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            {products.map((product, index) =>
              this.renderProduct(index, product, addToCart, removeFromCart)
            )}
          </Slider>
        </Segment>
      </Segment>
    );
  }


  renderProduct(index, product, addToCart, removeFromCart) {
    return (
      <Segment key={index}>
        <Card>
          <div style={divImage}>
            <Image src={product.image} height={150} />
          </div>
          <Card.Content>
            <Card.Header textAlign="left" style={divDescription}>
              <h3>{product.description}</h3>
            </Card.Header>
            <Card.Meta textAlign="right">
              <span className="date">{product.category}</span>
            </Card.Meta>
            <Card.Description textAlign="left">
              <sub>
                <del>{converteFloatMoeda(product.oldPrice)}</del>
              </sub>
            </Card.Description>
            <Card.Header textAlign="center">
              {converteFloatMoeda(product.newPrice)}
            </Card.Header>
            <Card.Description textAlign="center">
              {returnPlots(product.plots, product.newPrice)}
            </Card.Description>
          </Card.Content>
          <div>
            <Button>
              <NavLink
                to={ROUTERS_CONST.PRODUCT_BY_ID.replace(":id", product.id)}
              >
                <Icon link={true} name="eye" />
              </NavLink>
            </Button>
            <AddButton
              cartItem={this.props.cartItem}
              product={product}
              addToCart={addToCart}
            />
            {this.props.cartItem ? (
              <RemoveButton
                cartItem={this.props.cartItem}
                product={product}
                removeFromCart={removeFromCart}
              />
            ) : null}
          </div>
        </Card>
      </Segment>
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
)(ProductTopSalling);
