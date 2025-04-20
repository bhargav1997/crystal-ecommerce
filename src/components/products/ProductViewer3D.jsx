import { useRef, useEffect } from 'react';
import './ProductViewer3D.css';

const ProductViewer3D = ({ product }) => {
  const containerRef = useRef(null);
  const crystalRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current || !crystalRef.current) return;
    
    let isDragging = false;
    let previousX = 0;
    let previousY = 0;
    let rotateX = 0;
    let rotateY = 0;
    
    const handleMouseDown = (e) => {
      isDragging = true;
      previousX = e.clientX;
      previousY = e.clientY;
      containerRef.current.style.cursor = 'grabbing';
    };
    
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      
      const deltaX = e.clientX - previousX;
      const deltaY = e.clientY - previousY;
      
      rotateY += deltaX * 0.5;
      rotateX -= deltaY * 0.5;
      
      crystalRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      
      previousX = e.clientX;
      previousY = e.clientY;
    };
    
    const handleMouseUp = () => {
      isDragging = false;
      containerRef.current.style.cursor = 'grab';
    };
    
    const handleMouseLeave = () => {
      isDragging = false;
      containerRef.current.style.cursor = 'grab';
    };
    
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousX = e.touches[0].clientX;
        previousY = e.touches[0].clientY;
      }
    };
    
    const handleTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      
      const deltaX = e.touches[0].clientX - previousX;
      const deltaY = e.touches[0].clientY - previousY;
      
      rotateY += deltaX * 0.5;
      rotateX -= deltaY * 0.5;
      
      crystalRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      
      previousX = e.touches[0].clientX;
      previousY = e.touches[0].clientY;
    };
    
    const handleTouchEnd = () => {
      isDragging = false;
    };
    
    // Add event listeners
    containerRef.current.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    containerRef.current.addEventListener('mouseleave', handleMouseLeave);
    
    containerRef.current.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
    
    // Initial animation
    rotateY = 20;
    crystalRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousedown', handleMouseDown);
        containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
        containerRef.current.removeEventListener('touchstart', handleTouchStart);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);
  
  // Determine crystal color based on product category
  const getCrystalColor = () => {
    const category = product.category.toLowerCase();
    
    switch (category) {
      case 'healing':
        return 'purple';
      case 'love':
        return 'pink';
      case 'abundance':
        return 'gold';
      case 'protection':
        return 'black';
      case 'amplification':
        return 'clear';
      case 'spiritual':
        return 'blue';
      case 'cleansing':
        return 'white';
      case 'intuition':
        return 'blue-white';
      default:
        return 'clear';
    }
  };
  
  const crystalColor = getCrystalColor();
  
  return (
    <div className="product-viewer-3d" ref={containerRef}>
      <div className="crystal-model" ref={crystalRef}>
        <div className={`crystal-3d ${crystalColor}`}>
          <div className="crystal-face front"></div>
          <div className="crystal-face back"></div>
          <div className="crystal-face right"></div>
          <div className="crystal-face left"></div>
          <div className="crystal-face top"></div>
          <div className="crystal-face bottom"></div>
        </div>
      </div>
      <div className="viewer-instructions">
        <p>Click and drag to rotate</p>
      </div>
    </div>
  );
};

export default ProductViewer3D;
