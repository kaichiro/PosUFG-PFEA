import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3003"
});

const loadCategories = () => api.get("Categories");
const loadProducts = () => api.get("Products");
const loadProductsByCategory = Category =>
  api.get(`Products?category=${Category}`);
const loadTopSellingProducts = () => api.get(`Products?topSelling=1`);
const loadProductByDescription = description =>
  api.get(`Products?description=${description}`);
const loadProductById = id => api.get(`Products?id=${id}`);

export const apis = {
  loadCategories,
  loadProducts,
  loadProductsByCategory,
  loadTopSellingProducts,
  loadProductByDescription,
  loadProductById
};

// export default apis;

export const ApiTypesActions = {
  loadCategories: "loadCategories",
  loadProducts: "loadProducts",
  loadProductsByCategory: "loadProductsByCategory",
  loadTopSellingProducts: "loadTopSellingProducts"
};
