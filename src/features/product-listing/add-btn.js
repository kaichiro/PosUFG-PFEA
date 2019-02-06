import React from "react";
import { Button, Icon } from "semantic-ui-react";

export default function AddButton(props) {
  return (
    <Button onClick={() => props.addToCart(props.product)}>
      <Icon link={true} name="cart plus">
        ({(props.cartItem && props.cartItem.quantity) || 0})
      </Icon>
    </Button>
  );
}
