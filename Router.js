import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home-page";
import CartPage from "./pages/cart-page";
import CheckoutPage from "./pages/checkout-page";
import OrdersPage from "./pages/orders-page";
import ProductDetail from "./features/product-listing/product-detail";
import { ROUTERS_CONST } from "./utils/utils";
import TopSalling from "./pages/top-salling";
import ProductsByCategory from "./features/product-listing/product-byCategory";

const Router = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    {/* <Route exact path={ROUTERS_CONST.ROUTE_HOME} component={HomePage} /> */}

    {/* <Route exact path="/cart" component={CartPage} /> */}
    <Route exact path={ROUTERS_CONST.CART} component={CartPage} />

    {/* <Route exact path="/checkout" component={CheckoutPage} /> */}
    <Route exact path={ROUTERS_CONST.CHECKOUT} component={CheckoutPage} />

    {/* <Route path="/orders/:id" component={OrdersPage} /> */}
    <Route path={ROUTERS_CONST.ORDERS_BY_ID} component={OrdersPage} />

    <Route path={ROUTERS_CONST.PRODUCT_BY_ID} component={ProductDetail} />

    <Route path={ROUTERS_CONST.TOP_SALLING} component={TopSalling} />

    <Route
      path={ROUTERS_CONST.PRODUCT_BY_CATEGORY}
      component={ProductsByCategory}
    />
  </Switch>
);

export default Router;
