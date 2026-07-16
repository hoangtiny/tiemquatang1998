import { products } from '../data/products';

export const getProducts = async () => {
  // Trả về dữ liệu local thay vì gọi API WordPress
  return products;
};

export const getProductById = async (id) => {
  return products.find(p => String(p.id) === String(id));
};
