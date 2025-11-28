import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiFunction } from "../Services/apiFunction";

export default function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const ans = await apiFunction();

      if (ans && ans.products) {
        setData(ans.products);
      }
    }
    getData();
  }, []);

  if (!data || data.length === 0) {
    return (
      <p className="text-center text-gray-400 text-lg pt-10">Loading...</p>
    );
  }

  return (
    <div className="px-6 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">
        Products List
      </h1>

      {/* GRID LIST */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800/40 shadow-lg rounded-xl p-4 border border-gray-700 hover:scale-105 transition transform duration-300"
          >
            {/* IMAGE */}
            <img
              src={item.thumbnail}
              alt={item.title}
              className="rounded-lg h-40 w-full object-cover"
            />

            {/* TITLE */}
            <h2 className="text-xl font-semibold text-white mt-3">
              {item.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-300 mt-1 line-clamp-2">
              {item.description}
            </p>

            {/* PRICE & RATING */}
            <div className="flex justify-between items-center mt-3">
              <span className="text-green-400 font-bold">₹ {item.price}</span>
              <span className="text-yellow-400 font-semibold">
                ⭐ {item.rating}
              </span>
            </div>

            {/* DETAILS BUTTON */}
            <Link
              to={`/products/${item.id}`}
              className="mt-3 block bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
