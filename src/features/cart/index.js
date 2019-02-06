import React from "react";
import { connect } from "react-redux";
import { Button, Table, Icon, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import {
  ACTIONS_CONST,
  converteFloatMoeda,
  ROUTERS_CONST
} from "../../utils/utils";

// const sort = items => {
//   return items.sort((a, b) => a.id < b.id);
// };

function Cart(props) {
  var abc = 0;
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Item</Table.HeaderCell>
          <Table.HeaderCell>Qtde</Table.HeaderCell>
          <Table.HeaderCell>Unitário</Table.HeaderCell>
          <Table.HeaderCell>Subtotal</Table.HeaderCell>
          <Table.HeaderCell />
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {/* {sort(props.cart).map((item, index) => ( */}
        {props.cart.map((item, index) => (
          <Table.Row key={index}>
            <Table.Cell>
              <Image size="tiny" src={item.image} />
              <NavLink to={ROUTERS_CONST.PRODUCT_BY_ID.replace(":id", item.id)}>
                {item.description}
              </NavLink>
            </Table.Cell>
            <Table.Cell align="center">{item.quantity}</Table.Cell>
            <Table.Cell align="right">
              {converteFloatMoeda(item.newPrice)}
            </Table.Cell>
            <Table.Cell align="right">
              {converteFloatMoeda(item.quantity * item.newPrice)}
            </Table.Cell>
            <Table.Cell>
              <Button icon onClick={e => props.addToCart(item)}>
                <Icon color="green" name="plus" />
              </Button>
              <Button icon onClick={e => props.removeFromCart(item)}>
                <Icon color="red" name="minus" />
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button icon onClick={e => props.removeAllFromCart(item)}>
                <Icon color="black" name="minus circle" />
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
        <Table.Row>
          <Table.Cell />
          <Table.Cell />
          <Table.Cell />
          <Table.Cell align="right">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL"
            }).format(
              props.cart
                .reduce((a, b) => +a + +(b.newPrice * b.quantity), 0)
                .toFixed(2)
            )}
          </Table.Cell>
          <Table.Cell />
          <Table.Cell />
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => {
      dispatch({ type: ACTIONS_CONST.ADD, payload: item });
    },
    removeFromCart: item => {
      dispatch({ type: ACTIONS_CONST.REMOVE, payload: item });
    },
    removeAllFromCart: item => {
      dispatch({ type: ACTIONS_CONST.REMOVE_ALL, payload: item });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
