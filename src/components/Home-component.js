import React, { Component } from "react";

import CardProduct from "./Card.Product-Semantic-component";
import api from "../api/Api";
import { Card } from "semantic-ui-react";
import LoadData from "./LoadData-component";
import Carousel from "./Carousel-component";
import { ApiTypesActions } from "../customs/utils";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false, Products: [] };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    api.loadProducts().then(res => {
      this.setState({ isLoading: false, Products: res.data });
    });
  }

  renderProducts(Product) {
    return (
      <CardProduct
        key={Product.description}
        id={Product.id}
        description={Product.description}
        image={Product.image}
        newPrice={Product.newPrice}
        oldPrice={Product.oldPrice}
        plots={Product.plots}
        rating={Product.rating}
        category={Product.category}
      />
    );
  }

  render() {
    return (
      <section>
        <div>
          <div>
            <Carousel
              description="Produtos mais vendidos"
              products={[]}
              apiTypesActions={ApiTypesActions.loadTopSellingProducts}
              category={"x"}
              centered
            />
          </div>
          <br />
          <br />
          <h1>Todos os Produtos</h1>
          {/* <h1>{React.version}</h1> */}
          {this.state.isLoading && (
            <LoadData texto="Aguarde, carregando produtos..." />
          )}
          {!this.state.isLoading && (
            <Card.Group
              className="ui link cards"
              centered
              doubling
              stackable
              itemsPerRow={3}
            >
              {this.state.Products.map(this.renderProducts)}
            </Card.Group>
          )}
        </div>
      </section>
    );
  }
}

export default Home;
