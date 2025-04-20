import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { categories } from '../../data/products';
import './ProductList.css';

const ProductList = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortOption, setSortOption] = useState('featured');

  useEffect(() => {
    filterProducts(activeCategory, sortOption);
  }, [products, activeCategory, sortOption]);

  const filterProducts = (category, sort) => {
    let filtered = [...products];
    
    // Apply category filter
    if (category !== 'All') {
      filtered = filtered.filter(product => product.category === category);
    }
    
    // Apply sorting
    switch (sort) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
    
    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="product-list-container">
      <div className="product-filters">
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="sort-filter">
          <label htmlFor="sort">Sort by:</label>
          <select 
            id="sort" 
            value={sortOption} 
            onChange={handleSortChange}
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="no-products">
          <p>No products found in this category.</p>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
