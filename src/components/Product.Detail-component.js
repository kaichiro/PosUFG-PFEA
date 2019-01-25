import React, { Component } from "react";
import { Segment, Image, Rating } from "semantic-ui-react";

import api from "../api/Api";
import { formataValorMoedaReal, returnPlots } from "../customs/utils";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { product: {} };
    this.loadingData = this.loadingData.bind(this);
  }

  componentDidMount() {
    this.loadingData();
  }

  loadingData() {
    api.loadProductById(this.props.match.params.id).then(res => {
      this.setState({ product: res.data[0] });
    });
  }

  render() {
    return (
      
        
        <Segment style={{width:1000}}>

              <h1>{this.state.product.description}</h1>

          
              <div class="ui middle aligned stackable grid container">
                <div class="row">
                  <div class="eight wide column">
                    <Image ui large bordered rounded image src={this.state.product.image}/>   
                  </div>
                  <div class="six wide centered column">
                    <div class="ui middle aligned stackable grid container">
                      <div style={{padding:0}} class="row middle centered">
                        <label><sub><del> De {formataValorMoedaReal(this.state.product.oldPrice + 0)} </del></sub></label>
                      </div>
                      <div style={{padding:0}} class="row middle centered">
                        <label>
                          Por{" "}
                          {(this.state.product.newPrice + 0).toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                          })}
                        </label>
                      </div>          
                      <div style={{padding:0}} class="row middle centered">
                        <label>
                          {returnPlots(
                            this.state.product.plots + 0,
                            this.state.product.newPrice + 0
                          )}
                        </label>
                      </div>
                      <div style={{}} class="row middle centered">
                        <Rating
                          maxRating={5}
                          // defaultRating={2}
                          defaultRating={Number.parseInt(this.state.product.Rating) + 0}
                          icon="star"
                          size="mini"
                          disabled
                        />
                      </div>
                      <div style={{padding:0}} class="row middle centered">
                        <button class="ui button"> ADICIONAR AO CARRINHO &nbsp; <i class="shop icon"></i> </button>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              <div>Categoria: {this.state.product.category}</div>
            
          

          
          
          <Segment>
            <h1>{this.state.product.description}</h1>
            <div>
              {this.state.product.infos}
            </div>
          </Segment>
          
          
          

        </Segment>
        
    );
  }
}

export default ProductDetail;
