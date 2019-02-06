const ADD = "ADD";
const REMOVE = "REMOVE";
const REMOVE_ALL = "REMOVE_ALL";
const LOAD = "LOAD";

const HOME = "/";
const CART = "/cart";
const CHECKOUT = "/checkout";
const ORDERS_BY_ID = "/orders/:id";
const PRODUCT_BY_ID = "/product/:id";
const TOP_SALLING = "/topsalling";
const PRODUCT_BY_CATEGORY = "/categories";

export const ACTIONS_CONST = { ADD, REMOVE, REMOVE_ALL, LOAD };

export const ROUTERS_CONST = {
  HOME,
  CART,
  CHECKOUT,
  ORDERS_BY_ID,
  PRODUCT_BY_ID,
  TOP_SALLING,
  PRODUCT_BY_CATEGORY
};

export function converteFloatMoeda(valor) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(valor);
}

export function returnPlots(plots_, value_) {
  return plots_ + " x " + converteFloatMoeda(value_ / plots_);
}
