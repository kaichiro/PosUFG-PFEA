import * as React from "react";
import { Button, Card, Image, Rating } from "semantic-ui-react";

import CardComponentProps from "./CardComponentProps";

const divStyle = { padding: 7, width: 200 };

const divImage = { height: 180, width: 180, align: "center" };

function CardComponent(props: CardComponentProps) {
  return (
    <div style={divStyle}>
      <div className="ui link cards">
        <Card>
          <div style={divImage}>
            <Image
              bordered={true}
              wrapped={true}
              rounded={true}
              // inline={true}
              // hidden={true}
              fluid={true}
              // centered={true}
              circular={true}
              // spaced={true}
              // size="big"
              // size="huge"
              // size="large"
              // size="massive"
              size="medium"
              // size="mini"
              // size="small"
              // size="tiny"
              src={props.image}
            />
          </div>
          <Card.Content textAlign="left">
            <Card.Header>{props.description}</Card.Header>
            <Card.Meta textAlign="right">
              <del>{props.oldPrice}</del>
            </Card.Meta>
            <Card.Description textAlign="center">
              <strong>{props.newPrice}</strong>
            </Card.Description>
            <Card.Description textAlign="center">
              {props.plots}
            </Card.Description>
            <div className="ui two buttons">
              <Button basic={true} color="green">
                Add
              </Button>
              <Button basic={true} color="blue">
                Detail
              </Button>
            </div>
            <br />
            <Rating
              maxRating={5}
              defaultRating={props.rating}
              icon="star"
              size="mini"
            />
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}

export default CardComponent;
