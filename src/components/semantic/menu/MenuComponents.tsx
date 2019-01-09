import * as React from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment
} from "semantic-ui-react";

import CardGroupComponent from "../cardGroup/CardGroupComponent";

const MenuComponent = () => (
  <div>
    <Menu fixed="top" inverted={true}>
      <Container>
        <Menu.Item as="a" header={true}>
          <Image size="mini" src="/logo.png" style={{ marginRight: "1.5em" }} />
          Project Name
        </Menu.Item>
        <Menu.Item as="a">Home</Menu.Item>

        <Dropdown item={true} simple={true} text="Dropdown">
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className="dropdown icon" />
              <span className="text">Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>

    <Container text={true} style={{ marginTop: "7em" }}>
      <Header as="h1">Listagem de produtos</Header>

      <div>
        <CardGroupComponent />
      </div>

      <Image
        src="/images/wireframe/media-paragraph.png"
        style={{ marginTop: "2em" }}
      />
      <Image
        src="/images/wireframe/paragraph.png"
        style={{ marginTop: "2em" }}
      />
      <Image
        src="/images/wireframe/paragraph.png"
        style={{ marginTop: "2em" }}
      />
      <Image
        src="/images/wireframe/paragraph.png"
        style={{ marginTop: "2em" }}
      />
      <Image
        src="/images/wireframe/paragraph.png"
        style={{ marginTop: "2em" }}
      />
      <Image
        src="/images/wireframe/paragraph.png"
        style={{ marginTop: "2em" }}
      />
      <Image
        src="/images/wireframe/paragraph.png"
        style={{ marginTop: "2em" }}
      />
    </Container>

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
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted={true} as="h4" content="Group 2" />
            <List link={true} inverted={true}>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted={true} as="h4" content="Group 3" />
            <List link={true} inverted={true}>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted={true} as="h4" content="Footer Header" />
            <p>
              Extra space for a call to action inside the footer that could help
              re-engage users.
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

export default MenuComponent;
