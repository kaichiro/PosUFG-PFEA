import * as React from "react";
import {
  Button,
  Card,
  Icon,
  Image,
  Rating
} from "semantic-ui-react";

import CardComponentProps from "../../props/CardComponentProps";

const divImage = { height: 180, width: 180, align: "center" };

// function CardComponent(props: CardComponentProps) {
class CardComponent extends React.Component<CardComponentProps> {
  constructor(props: CardComponentProps) {
    super(props);
    this.state = {};
  }

  // tslint:disable-next-line:member-access
  handleOpen = () => {
    // this.setState({ active: true });
    alert(this.props.description);

  };

  // tslint:disable-next-line:member-access
  render() {
    return (
      <div style={{ padding: 7, width: 200 }}>
        <div className="ui link cards">
          <Card>
            <div style={divImage}>
              <Image
                bordered={true}
                wrapped={true}
                rounded={true}
                // inline={true}
                // hidden={true}
                // fluid={true}
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
                src={this.props.image}
              />
            </div>
            <Card.Content textAlign="left">
              <Card.Header>{this.props.description}</Card.Header>
              <Card.Meta textAlign="right">
                <del>{this.props.oldPrice}</del>
              </Card.Meta>
              <Card.Description textAlign="center">
                <strong>{this.props.newPrice}</strong>
              </Card.Description>
              <Card.Description textAlign="center">
                {this.props.plots}
              </Card.Description>
              <Card.Content textAlign="center">
                <div style={{ position: "revert" }}>
                  <Button.Group size="mini">
                    <Button>
                      <Icon size="large" link={true} name="cart plus" />
                    </Button>
                    <Button.Or />
                    <Button onClick={this.handleOpen}>
                      <Icon size="large" link={true} name="eye" />
                    </Button>
                  </Button.Group>
                </div>
              </Card.Content>
              <br />
              <Rating
                maxRating={5}
                defaultRating={this.props.rating}
                icon="star"
                size="mini"
              />
            </Card.Content>
          </Card>
        </div>
      </div>
    );
  }
}

export default CardComponent;
