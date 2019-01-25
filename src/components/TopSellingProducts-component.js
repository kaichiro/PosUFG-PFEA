import React, { Component } from "react";

import Carousel from "./Carousel-component";
import { ApiTypesActions } from "../customs/utils";

class TopSellingProducts extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: false };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <section>
        <Carousel
          description="Produtos mais vendidos"
          products={[]}
          apiTypesActions={ApiTypesActions.loadTopSellingProducts}
          category={"x"}
        />
      </section>
    );
  }
}

export default TopSellingProducts;
