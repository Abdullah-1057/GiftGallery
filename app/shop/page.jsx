"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Filter, Grid, List, MessageCircle, Heart, Star } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Luxury Spa Set",
    price: 89.99,
    originalPrice: 129.99,
    category: "Luxury",
    image: "/placeholder-5rpl0.png",
    rating: 5,
    reviews: 124,
    isNew: true,
    onSale: true,
  },
  {
    id: 2,
    name: "Personalized Photo Album",
    price: 45.99,
    category: "Personalized",
    image: "/personalized-leather-photo-album.png",
    rating: 4.8,
    reviews: 89,
    isNew: false,
    onSale: false,
  },
  {
    id: 3,
    name: "Birthday Surprise Box",
    price: 34.99,
    category: "Birthday",
    image: "/colorful-birthday-gift-box.png",
    rating: 4.9,
    reviews: 156,
    isNew: true,
    onSale: false,
  },
  {
    id: 4,
    name: "Anniversary Wine Set",
    price: 78.99,
    category: "Anniversary",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 67,
    isNew: false,
    onSale: false,
  },
  {
    id: 5,
    name: "Custom Jewelry Box",
    price: 65.99,
    category: "Personalized",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 203,
    isNew: false,
    onSale: false,
  },
  {
    id: 6,
    name: "Premium Tea Collection",
    price: 42.99,
    originalPrice: 59.99,
    category: "Luxury",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 91,
    isNew: false,
    onSale: true,
  },
  {
    id: 7,
    name: "Birthday Balloon Bouquet",
    price: 28.99,
    category: "Birthday",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.5,
    reviews: 78,
    isNew: true,
    onSale: false,
  },
  {
    id: 8,
    name: "Romantic Candle Set",
    price: 39.99,
    category: "Anniversary",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 134,
    isNew: false,
    onSale: false,
  },
];

const ShopHeader = () => {
  return (
    <section className="bg-gradient-to-r from-pink-500 to-purple-600 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Gift Shop
          </h1>
          <p className="text-xl text-purple-100">
            Discover the perfect gift for every special moment
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const FilterBar = ({ sortBy, setSortBy, filterBy, setFilterBy }) => {
  const categories = [
    "All",
    "Birthday",
    "Anniversary",
    "Luxury",
    "Personalized",
  ];
  const sortOptions = [
    { value: "name", label: "Name" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Rating" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="flex items-center gap-4">
          <Filter className="w-5 h-5 text-gray-600" />
          <span className="font-semibold text-gray-800">
            Filter by Category:
          </span>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilterBy(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  filterBy === category
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-semibold text-gray-800">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product, index }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group"
    >
      <div className="relative overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              New
            </span>
          )}
          {product.onSale && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              Sale
            </span>
          )}
        </div>

        {/* Wishlist button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all duration-300"
        >
          <Heart
            className={`w-5 h-5 transition-colors duration-300 ${
              isLiked ? "text-red-500 fill-current" : "text-gray-600"
            }`}
          />
        </button>

        {/* Ribbon overlay */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 transform rotate-45 translate-x-8 -translate-y-8" />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-300">
          {product.name}
        </h3>

        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            ({product.reviews})
          </span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-pink-600">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() =>
            (window.location.href = `/contact?product=${encodeURIComponent(
              product.name
            )}&price=${product.price}`)
          }
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow duration-300"
        >
          <MessageCircle className="w-5 h-5" />
          Contact for Order
        </motion.button>
      </div>
    </motion.div>
  );
};

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
};

export default function ShopPage() {
  const [sortBy, setSortBy] = useState("name");
  const [filterBy, setFilterBy] = useState("All");

  // Filter products
  const filteredProducts = products.filter(
    (product) => filterBy === "All" || product.category === filterBy
  );

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "name":
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div>
      <ShopHeader />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <FilterBar
          sortBy={sortBy}
          setSortBy={setSortBy}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
        />

        <div key={`${sortBy}-${filterBy}`}>
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {sortedProducts.length} products
              {filterBy !== "All" && ` in ${filterBy}`}
            </p>
          </div>

          <ProductGrid products={sortedProducts} />
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No products found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
