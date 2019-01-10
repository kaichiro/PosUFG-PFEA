import * as React from "react";
import {
  //   Button,
  Container,
  Divider,
  //   Dropdown,
  Grid,
  Header,
  //   Icon,
  Image,
  List,
  //   Menu,
  Segment
} from "semantic-ui-react";

class RodapeComponent extends React.Component {
  // tslint:disable-next-line:member-access
  render() {
    return (
      <div>
        <Segment
          inverted={true}
          vertical={true}
          style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
        >
          <Container textAlign="center">
            <Grid divided={true} inverted={true} stackable={true}>
              <Grid.Column width={3}>
                <Header inverted={true} as="h4" content="Group 1" />
                <List link={true} inverted={true}>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted={true} as="h4" content="Group 2" />
                <List link={true} inverted={true}>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted={true} as="h4" content="Group 3" />
                <List link={true} inverted={true}>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header inverted={true} as="h4" content="Footer Header" />
                <p>
                  Extra space for a call to action inside the footer that could
                  help re-engage users.
                </p>
              </Grid.Column>
            </Grid>

            <Divider inverted={true} section={true} />
            <Image centered={true} size="mini" src="/logo.png" />
            <List
              horizontal={true}
              inverted={true}
              divided={true}
              link={true}
              size="small"
            >
              <List.Item as="a" href="#">
                Site Map
              </List.Item>
              <List.Item as="a" href="#">
                Contact Us
              </List.Item>
              <List.Item as="a" href="#">
                Terms and Conditions
              </List.Item>
              <List.Item as="a" href="#">
                Privacy Policy
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    );
  }
}
export default RodapeComponent;
