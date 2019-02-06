import React from "react";


class Order extends React.Component {
  state = {
    order: null
  };
  componentDidMount() {
  }

  renderOrder() {
    const { name, email, order_items } = this.state.order;
    return (
      <div>
        <h3>Informações da Compra</h3>
        <div>Nome: {name}</div>
        <div>Email: {email}</div>
        <h4>Itens</h4>
        <ul>
          {order_items &&
            order_items.map(item => {
              const {
                product,
                qty,
                product: { name, image, price }
              } = item;
              return (
                <li>
                  <img src={image} width={32} />
                  {name}({qty} @ ${price} = $
                  {parseFloat(qty) * parseFloat(price)})
                </li>
              );
            })}
        </ul>
      </div>
    );
  }

  render() {
    const { order } = this.state;
    return <div>{order ? this.renderOrder() : "Loading...."}</div>;
  }
}

export default Order;
