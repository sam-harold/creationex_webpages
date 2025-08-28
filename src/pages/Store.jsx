import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer.jsx';
import HeroSection from '../components/HeroSection.jsx';
import {
  Star,
  Minus,
  Plus,
  X,
  ShoppingBag,
  Trash2,
  ShoppingCart,
} from 'lucide-react';
import { mockProducts } from '../data/mockProducts';

const Store = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quantities, setQuantities] = useState({});

  const categories = [
    { id: 'all', name: 'All Products', count: mockProducts.length },
    {
      id: 'apparel',
      name: 'Apparel',
      count: mockProducts.filter((p) => p.category === 'apparel').length,
    },
    {
      id: 'accessories',
      name: 'Accessories',
      count: mockProducts.filter((p) => p.category === 'accessories').length,
    },
  ];

  useEffect(() => {
    setProducts(mockProducts);
    // Initialize quantities
    const initialQuantities = {};
    mockProducts.forEach((product) => {
      initialQuantities[product.id] = 1;
    });
    setQuantities(initialQuantities);
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === 'all' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'rating':
        return b.rating - a.rating;
      default:
        return b.featured ? 1 : -1;
    }
  });

  const addToCart = (product, selectedSize = null, selectedColor = null) => {
    const cartItem = {
      ...product,
      cartId: `${product.id}-${selectedSize || 'default'}-${selectedColor || 'default'}`,
      selectedSize,
      selectedColor,
      quantity: quantities[product.id] || 1,
    };

    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.cartId === cartItem.cartId
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.cartId === cartItem.cartId
            ? { ...item, quantity: item.quantity + cartItem.quantity }
            : item
        );
      }
      return [...prevCart, cartItem];
    });
  };

  const removeFromCart = (cartId) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartId !== cartId));
  };

  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(cartId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.cartId === cartId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const ProductCard = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState(
      product.sizes ? product.sizes[0] : null
    );
    const [selectedColor, setSelectedColor] = useState(
      product.colors ? product.colors[0] : null
    );
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full">
        {/* Product Image */}
        <div className="relative overflow-hidden flex-shrink-0">
          <img
            src={
              product.images && product.images.length > 0
                ? `${product.images[currentImageIndex]}?auto=compress&cs=tinysrgb&h=650&w=940`
                : product.image
                  ? `${product.image}?auto=compress&cs=tinysrgb&h=650&w=940`
                  : ''
            }
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.featured && (
            <div className="absolute top-4 right-4">
              <span className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </span>
            </div>
          )}

          {/* Image Navigation */}
          {product.images && product.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    currentImageIndex === index
                      ? 'bg-white'
                      : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
              {product.name}
            </h3>
          </div>

          {/* Rating */}
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          {/* Options */}
          {product.sizes && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">
                Size:
              </h4>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
              >
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}

          {product.colors && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">
                Color:
              </h4>
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
              >
                {product.colors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">
              Quantity:
            </h4>
            <div className="flex items-center space-x-3">
              <button
                onClick={() =>
                  setQuantities((prev) => ({
                    ...prev,
                    [product.id]: Math.max(1, (prev[product.id] || 1) - 1),
                  }))
                }
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-semibold">
                {quantities[product.id] || 1}
              </span>
              <button
                onClick={() =>
                  setQuantities((prev) => ({
                    ...prev,
                    [product.id]: Math.min(
                      product.stock,
                      (prev[product.id] || 1) + 1
                    ),
                  }))
                }
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Price and Stock */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">
                RM{product.price.toFixed(2)}
              </span>
            </div>
            <span className="text-sm text-gray-600">
              {product.stock} in stock
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(product, selectedSize, selectedColor)}
            disabled={product.stock === 0}
            className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-300 transform hover:scale-105 mt-auto"
          >
            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    );
  };

  const CartSidebar = () => {
    return (
      <div
        className={`fixed inset-0 z-50 ${isCartOpen ? '' : 'pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isCartOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={() => setIsCartOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ${
            isCartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  Shopping Cart ({getTotalItems()})
                </h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.cartId}
                      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm">{item.name}</h3>
                        {item.selectedSize && (
                          <p className="text-xs text-gray-600">
                            Size: {item.selectedSize}
                          </p>
                        )}
                        {item.selectedColor && (
                          <p className="text-xs text-gray-600">
                            Color: {item.selectedColor}
                          </p>
                        )}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() =>
                                updateQuantity(item.cartId, item.quantity - 1)
                              }
                              className="w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center text-sm"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="text-sm font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.cartId, item.quantity + 1)
                              }
                              className="w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center text-sm"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <span className="font-semibold text-sm">
                            RM{(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="p-1 hover:bg-red-100 rounded-full text-red-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-gray-700">
                    RM{getTotalPrice().toFixed(2)}
                  </span>
                </div>
                <button className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-700 transition duration-200">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection
        title="CreatioNeX Shop"
        subtitle="Show your community spirit with our exclusive merchandise"
      />

      {/* Sticky Filters and Cart Navbar */}
      <div className="sticky top-20 z-30 bg-gray-50 shadow-md py-4">
        {' '}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-orange-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Sort and Cart */}
            <div className="flex items-center justify-between sm:justify-end space-x-4">
              <span className="text-gray-600 hidden sm:inline">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
                <option value="rating">Rating</option>
              </select>
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-gray-200 rounded-full"
              >
                <ShoppingCart className="w-6 h-6 text-gray-700" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        {sortedProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No products found in this category.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Cart Sidebar */}
      <CartSidebar />

      <Footer />
    </div>
  );
};

export default Store;
