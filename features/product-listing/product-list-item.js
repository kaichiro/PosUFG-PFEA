import React from "react";
import { Card, Image, Button, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import AddBtn from "./add-btn";
import RemoveBtn from "./remove-btn";
import {
  converteFloatMoeda,
  returnPlots,
  ROUTERS_CONST
} from "../../utils/utils";

const divStyle = { padding: 7, width: 200 };
const divImage = { height: 180, width: 180, align: "center" };

export default function ProductListItem(props) {
  return (
    <div style={divStyle}>
      <Card>
        <div style={divImage}>
          <Image src={props.product.image} height={150} />
        </div>
        <Card.Content>
          <Card.Header textAlign="left">
            <h3>{props.product.description}</h3>
          </Card.Header>
          <Card.Meta textAlign="right">
            <span className="date">{props.product.category}</span>
          </Card.Meta>
          <Card.Description textAlign="left">
            <sub>
              <del>{converteFloatMoeda(props.product.oldPrice)}</del>
            </sub>
          </Card.Description>
          <Card.Header textAlign="center">
            {converteFloatMoeda(props.product.newPrice)}
          </Card.Header>
          <Card.Description textAlign="center">
            {returnPlots(props.product.plots, props.product.newPrice)}
          </Card.Description>
        </Card.Content>
        <div>
          <Button>
            <NavLink
              to={ROUTERS_CONST.PRODUCT_BY_ID.replace(":id", props.product.id)}
            >
              <Icon link={true} name="eye" />
            </NavLink>
          </Button>
          <AddBtn
            cartItem={props.cartItem}
            product={props.product}
            addToCart={props.addToCart}
          />
          {props.cartItem ? (
            <RemoveBtn
              cartItem={props.cartItem}
              product={props.product}
              removeFromCart={props.removeFromCart}
            />
          ) : null}
        </div>
      </Card>
    </div>
  );
}
