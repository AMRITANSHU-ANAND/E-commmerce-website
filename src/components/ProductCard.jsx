import React, { useContext } from "react";
import { MyShop } from "../context/MyWebsite";

const ProductCard = ({ product,}) => {
  let { setCartItems } = useContext(MyShop);

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Product Image */}
      <div className="flex h-64 items-center justify-center bg-gray-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        
        {/* Category */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="mb-2 line-clamp-2 text-lg font-bold text-gray-900">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mb-4 line-clamp-2 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mb-4 flex items-center gap-2">
          <div className="flex text-yellow-400">
            {"★".repeat(Math.round(product.rating.rate))}
            {"☆".repeat(5 - Math.round(product.rating.rate))}
          </div>

          <span className="text-sm text-gray-500">
            {product.rating.rate} ({product.rating.count})
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>

          <button onClick={()=> setCartItems(prev=>[...prev,product]) } className="rounded-xl bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;