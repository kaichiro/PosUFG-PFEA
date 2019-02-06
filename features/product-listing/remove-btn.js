import React from "react";
import { Button, Icon } from "semantic-ui-react";

export default function RemoveButton(props) {
  return (
    <Button onClick={() => props.removeFromCart(props.cartItem)}>
      <Icon link={true} name="remove circle" color="red" />
    </Button>
  );
}
