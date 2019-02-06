import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Menu, Segment, Dropdown } from "semantic-ui-react";

import Router from "./Router";
import { ROUTERS_CONST } from "./utils/utils";
import { apis } from "./api/Api";

// const Navigation = ({ cart }) => (
//   <nav>
//     <ul className="top-menu">
//       <li>
//         <NavLink to={ROUTERS_CONST.HOME}>Home</NavLink>
//       </li>
//       <li>
//         <NavLink to={ROUTERS_CONST.TOP_SALLING}>Mais vendidos</NavLink>
//       </li>
//       <li>
//         <NavLink to={ROUTERS_CONST.CART}>
//           Cart (
//           {cart.reduce((acc, item) => {
//             return acc + item.quantity;
//           }, 0)}
//           )
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to={ROUTERS_CONST.CHECKOUT}>Check out</NavLink>
//       </li>
//     </ul>
//   </nav>
// );

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "home", Categories: [], Products: [] };
    this.renderCategorias = this.renderCategorias.bind(this);
  }

  componentDidMount() {
    apis.loadCategories().then(res => {
      this.setState({ Categories: res.data });
    });
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  renderCategorias(categ) {
    return (
      <Dropdown.Item key={categ}>
        <NavLink
          to={ROUTERS_CONST.PRODUCT_BY_CATEGORY.replace(":category", categ)}
        >
          {categ}
        </NavLink>
      </Dropdown.Item>
    );
  }

  render() {
    const { activeItem, Categories } = this.state;
    return (
      <div className="page-container">
        {/* <Navigation {...this.props} /> */}
        <Menu pointing>
          <Menu.Item
            as="div"
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            <NavLink to={ROUTERS_CONST.HOME}>Home</NavLink>
          </Menu.Item>
          <Menu.Item
            as="div"
            name="topsalling"
            active={activeItem === "topsalling"}
            onClick={this.handleItemClick}
          >
            <NavLink to={ROUTERS_CONST.TOP_SALLING}>Mais vendidos</NavLink>
          </Menu.Item>
          <Menu.Item
            as="div"
            name="categories"
            active={activeItem === "categories"}
            onClick={this.handleItemClick}
          >
            <NavLink to={ROUTERS_CONST.PRODUCT_BY_CATEGORY}>Categorias</NavLink>
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item
              as="div"
              name="cart"
              active={activeItem === "cart"}
              onClick={this.handleItemClick}
            >
              <NavLink to={ROUTERS_CONST.CART}>
                Cart (
                {this.props.cart.reduce((acc, item) => {
                  return acc + item.quantity;
                }, 0)}
                )
              </NavLink>
            </Menu.Item>
            <Menu.Item
              as="div"
              name="checkout"
              active={activeItem === "checkout"}
              onClick={this.handleItemClick}
            >
              <NavLink to={ROUTERS_CONST.CHECKOUT}>Check out</NavLink>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Segment>
          <Router />
        </Segment>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default withRouter(connect(mapStateToProps)(App));
