import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu, Segment, Dropdown, Button, Icon } from "semantic-ui-react";

import Home from "./components/Home-component";
import Pedido from "./components/Pedido-component";
import api from "./api/Api";
import ProductsByCategory from "./components/ProductsByCategory-component";
import TopSellingProducts from "./components/TopSellingProducts-component";
import ProductDetail from "./components/Product.Detail-component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: "home", Categories: [], Products: [] };

    this._loadCategories = this._loadCategories.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentDidMount() {
    this._loadCategories();
    api
      .loadProducts()
      .then(res =>
        this.setState({ Products: [...this.state.Products, res.data[0]] })
      );
    api
      .loadTopSellingProducts()
      .then(res =>
        this.setState({ Products: [...this.state.Products, res.data[3]] })
      );
  }

  _loadCategories() {
    api.loadCategories().then(res => {
      this.setState({ Categories: res.data });
    });
  }

  _renderCategoriesLink(Category) {
    return (
      <Dropdown.Item key={Category}>
        <Link to={`/Category/${Category}`}>{Category}</Link>
      </Dropdown.Item>
      // <Link to={`/Category/${Category}`}>
      //   <Dropdown.Item key={Category}>{Category}</Dropdown.Item>
      // </Link>
    );
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Router>
        <div>
          <Menu pointing>
            <Menu.Item
              as="div"
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            >
              <Link to="/">Home</Link>
            </Menu.Item>

            <Menu.Item
              as="div"
              name="pedido"
              active={activeItem === "pedido"}
              onClick={this.handleItemClick}
            >
              <Link to={`/Pedido/${"NotebookK"}`}>Pedido</Link>
            </Menu.Item>

            <Menu.Menu>
              <Dropdown
                item
                text="Categorias"
                name="categorias"
                // active={activeItem === "categorias"}
                active={activeItem === "categorias" ? true : undefined}
              >
                <Dropdown.Menu>
                  {this.state.Categories.map(this._renderCategoriesLink)}
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
            <Menu.Item
              as="div"
              name="topSelling"
              active={activeItem === "topSelling"}
              onClick={this.handleItemClick}
            >
              <Link to={`/TopSelling`}>Mais vendidos</Link>
            </Menu.Item>
            <Menu.Menu position="right">
              <Button animated="vertical">
                <Button.Content hidden>
                  {this.state.Products.length}
                </Button.Content>
                <Button.Content visible>
                  <Icon name="shop" />
                  <sub>{this.state.Products.length}</sub>
                </Button.Content>
              </Button>
            </Menu.Menu>
          </Menu>

          <Segment>
            <Route exact path="/" component={Home} />
            <Route exact path="/Pedido/:category" component={Pedido} />
            <Route
              exact
              path="/Category/:category"
              component={ProductsByCategory}
            />
            <Route exact path="/TopSelling" component={TopSellingProducts} />
            <Route exact path="/ProductsDetail/:id" component={ProductDetail} />
          </Segment>
        </div>
      </Router>
    );
  }
}

export default App;
