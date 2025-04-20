import ProductList from '../components/products/ProductList';
import './ShopPage.css';

const ShopPage = ({ products }) => {
  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1>Shop Our Crystals</h1>
        <p>Discover our collection of premium quality crystals and gemstones</p>
      </div>
      
      <ProductList products={products} />
    </div>
  );
};

export default ShopPage;
