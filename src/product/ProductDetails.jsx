import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="text-center text-gray-400 mt-10">Loading...</div>;
  }

  return (
    <div className="px-6 py-10 max-w-5xl mx-auto">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-800/50 p-6 rounded-2xl shadow-lg">

        {/* Product Image */}
        <div>
          <img
            src={product.thumbnail}
            className="rounded-xl w-full h-80 object-cover"
            alt={product.title}
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-bold mb-3">{product.title}</h1>

          <p className=" text-black text-md mb-4">{product.description}</p>

          <div className="flex items-center justify-between mt-4">
            <span className="text-3xl font-bold text-green-400">
              ₹ {product.price}
            </span>

            <span className="text-yellow-400 text-lg font-semibold">
              ⭐ {product.rating}
            </span>
          </div>

          <p className="mt-4">
            <span className="font-semibold text-white">Brand:</span> {product.brand}
          </p>

          <p>
            <span className="font-semibold text-white">Category:</span> {product.category}
          </p>

          <p>
            <span className="font-semibold text-white">Stock:</span> {product.stock}
          </p>

        </div>

      </div>

    </div>
  );
}