import React, { Component } from "react";

import Carousel from "./Carousel-component";
import { ApiTypesActions } from "../customs/utils";

class Pedido extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <section>
        <Carousel
          description="Listando todos os produtos"
          // products={[]}
          apiTypesActions={ApiTypesActions.loadProducts}
          category={""}
        />
      </section>
    );
  }
}

export default Pedido;
