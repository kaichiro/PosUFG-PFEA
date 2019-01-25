export function formataValorMoedaReal(number_) {
  return number_.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
  });
}

export function returnPlots(plots_, value_) {
  return plots_ + " x " + formataValorMoedaReal(value_ / plots_);
}

export const ApiTypesActions = {
  loadCategories: "loadCategories",
  loadProducts: "loadProducts",
  loadProductsByCategory: "loadProductsByCategory",
  loadTopSellingProducts: "loadTopSellingProducts"
};
