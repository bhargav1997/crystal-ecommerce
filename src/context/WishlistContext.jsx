import { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => {
  return useContext(WishlistContext);
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  
  // Load wishlist from localStorage on initial render
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist));
      } catch (error) {
        console.error('Error parsing wishlist from localStorage:', error);
        setWishlist([]);
      }
    }
  }, []);
  
  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);
  
  // Add item to wishlist
  const addToWishlist = (product) => {
    setWishlist(prevWishlist => {
      // Check if product is already in wishlist
      if (prevWishlist.some(item => item.id === product.id)) {
        return prevWishlist;
      }
      return [...prevWishlist, product];
    });
  };
  
  // Remove item from wishlist
  const removeFromWishlist = (productId) => {
    setWishlist(prevWishlist => 
      prevWishlist.filter(item => item.id !== productId)
    );
  };
  
  // Check if an item is in the wishlist
  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };
  
  // Clear the entire wishlist
  const clearWishlist = () => {
    setWishlist([]);
  };
  
  const value = {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist
  };
  
  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
