import React, { useState } from 'react';

const AddProductForm = ({ onAdd }) => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      productName,
      description,
      quantity,
      price,
    };
    onAdd(newProduct);
    setProductName('');
    setDescription('');
    setQuantity(0);
    setPrice(0);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-4 p-6 bg-white shadow-md rounded-lg">
      <label className="block mb-4">
        <span className="text-gray-700">Product Name:</span>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Description:</span>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
        ></textarea>
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Quantity:</span>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          required
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Price:</span>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          required
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
        />
      </label>
      <button
        type="submit"
        className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
