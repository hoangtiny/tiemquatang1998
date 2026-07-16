import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import FeaturedImages from '../components/FeaturedImages';
import CustomerGallery from '../components/CustomerGallery';
import { getProducts } from '../services/productService';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const wpProducts = await getProducts();
        setProducts(wpProducts);
      } catch (error) {
        console.error("Home: Failed to load products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Hero />
      <Categories />
      {loading ? (
          <div className="py-12 text-center text-gray-500">Đang tải sản phẩm...</div>
      ) : (
          <FeaturedProducts products={products} />
      )}
      <FeaturedImages />
      <CustomerGallery />
    </>
  );
};

export default HomePage;
