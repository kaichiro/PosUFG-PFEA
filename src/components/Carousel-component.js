import React, { Component } from "react";
import Slider from "react-slick";

import CardProduct from "./Card.Product-Semantic-component";
import api from "../api/Api";
import { ApiTypesActions } from "../customs/utils";
import LoadData from "./LoadData-component";

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      description: this.props.description,
      products: [],
      apiTypesActions: this.props.apiTypesActions,
      category: this.props.category
    };

    this.renderProducts = this.renderProducts.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.loadData();
    setTimeout(() => this.setState({ isLoading: false }), 300);
  }

  loadData() {
    switch (this.state.apiTypesActions) {
      case ApiTypesActions.loadTopSellingProducts:
        api.loadTopSellingProducts().then(res => {
          this.setState({ products: res.data });
        });
        break;
      case ApiTypesActions.loadProductsByCategory:
        api.loadProductsByCategory(this.props.category).then(res => {
          this.setState({ products: res.data });
        });
        break;
      default:
        api.loadProducts().then(res => {
          this.setState({ products: res.data });
        });
        break;
    }
  }

  renderProducts(Product) {
    return (
      <div key={Product.description}>
        <CardProduct
          className="ui link cards"
          id={Product.id}
          description={Product.description}
          image={Product.image}
          newPrice={Product.newPrice}
          oldPrice={Product.oldPrice}
          plots={Product.plots}
          rating={Product.rating}
          category={Product.category}
        />
      </div>
    );
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1 ,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };

    return (
      <div>
        <h2>{this.state.description}</h2>
        <section>
          {this.state.isLoading && (
            <LoadData texto="Aguarde, carregando produtos..." />
          )}
          {!this.state.isLoading && (
            <Slider ref={slider => (this.slider = slider)} {...settings}>
              {this.state.products.map(this.renderProducts)}
            </Slider>
          )}
        </section>
      </div>
    );
  }
}

export default Carousel;
