import React, { Component } from "react";
import { Card, Image, Rating, Segment } from "semantic-ui-react";

import AddBtn from "./add-btn";
import RemoveBtn from "./remove-btn";
import { converteFloatMoeda, returnPlots } from "../../utils/utils";
import { apis } from "../../api/Api";

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { product: {} };
  }

  componentDidMount() {
    apis.loadProductById(this.props.match.params.id).then(res => {
      this.setState({ product: res.data[0] });
    });
  }

  render() {
    const { product } = this.state;
    return (
      <Segment style={{ width: 1000 }}>
        <h1>{product.description}</h1>
        <div class="ui middle aligned stackable grid container">
          <div class="row">
            <div class="eight wide column">
              <Image ui large bordered rounded image src={product.image} />
            </div>
            <div class="six wide centered column">
              <div class="ui middle aligned stackable grid container">
                <div style={{ padding: 0 }} class="row middle centered">
                  <label>
                    <sub>
                      <del>De {converteFloatMoeda(product.oldPrice + 0)}</del>
                    </sub>
                  </label>
                </div>
                <div style={{ padding: 0 }} class="row middle centered">
                  <label>Por {converteFloatMoeda(product.newPrice + 0)}</label>
                </div>
                <div style={{ padding: 0 }} class="row middle centered">
                  <label>
                    {returnPlots(product.plots + 0, product.newPrice + 0)}
                  </label>
                </div>
                <div style={{}} class="row middle centered">
                  <Rating
                    maxRating={5}
                    defaultRating={Number.parseInt(product.Rating) + 0}
                    icon="star"
                    size="mini"
                    disabled
                  />
                </div>
                {/* <div style={{ padding: 0 }} class="row middle centered">
                  <button class="ui button">
                    {" "}
                    ADICIONAR AO CARRINHO &nbsp; <i class="shop icon" />{" "}
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div>Categoria: {product.category}</div>
        <Segment>
          <h1>{product.description}</h1>
          <div>{product.infos}</div>
        </Segment>
      </Segment>
    );
  }
}
