import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001"
});

export const loadCategories = () => api.get("Categories");
export const loadProducts = () => api.get("Products");
export const loadProductsByCategory = Category =>
  api.get(`Products?category=${Category}`);
export const loadTopSellingProducts = () => api.get(`Products?topSelling=1`);
export const loadProductByDescription = description =>
  api.get(`Products?description=${description}`);
export const loadProductById = id => api.get(`Products?id=${id}`);

const apis = {
  loadCategories,
  loadProducts,
  loadProductsByCategory,
  loadTopSellingProducts,
  loadProductByDescription,
  loadProductById
};

export default apis;
