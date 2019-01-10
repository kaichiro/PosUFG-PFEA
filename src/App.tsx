import * as React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Icon, Menu } from "semantic-ui-react";
import "./App.css";

import CardGroupComponent from "./components/semantic/CardGroupComponent";
import RodapeComponent from "./components/semantic/RodapeComponent";

class App extends React.Component {
  public state = { quantidade: 0 };

  public handleChange = (e: any, { name, value }: any) => {
    return this.setState({ [name]: value });
  };

  public addItemCarrinhoDeCompras = () => {
    alert("teste");
  };

  public render() {
    return (
      <div className="App">
        <div>
          <Menu fixed="top" inverted={true}>
            <Container>
              <Menu.Item as="a">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item as="a">
                <Link to="/perfil">Perfil</Link>
              </Menu.Item>
            </Container>
            <Menu.Menu position="right">
              <Button animated="vertical">
                <Button.Content hidden={true}>Shop</Button.Content>
                <Button.Content visible={true}>
                  <Icon name="shop" />
                  <sub>213</sub>
                </Button.Content>
              </Button>
            </Menu.Menu>
          </Menu>
        </div>

        {/* <Container text={true} style={{ marginTop: "7em" }}>
          <Header as="h1">Listagem de produtos</Header>
          <Image
            src="/images/wireframe/paragraph.png"
            style={{ marginTop: "2em" }}
          />
        </Container> */}

        <div style={{ padding: 7 }}>
          <h1>Listagem de produtos</h1>
          <CardGroupComponent />
        </div>

        <RodapeComponent />
      </div>
    );
  }
}

export default App;
