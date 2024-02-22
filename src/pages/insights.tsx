import React from 'react';

const data = [
  { productName: 'Product A', totalItemSold: 100, totalItemsAvailable: 50, cost: 10 },
  { productName: 'Product B', totalItemSold: 200, totalItemsAvailable: 100, cost: 20 },
  { productName: 'Product C', totalItemSold: 150, totalItemsAvailable: 75, cost: 15 },
  { productName: 'Product A', totalItemSold: 100, totalItemsAvailable: 50, cost: 10 },
  { productName: 'Product B', totalItemSold: 200, totalItemsAvailable: 100, cost: 20 },
  { productName: 'Product C', totalItemSold: 150, totalItemsAvailable: 75, cost: 15 },
  { productName: 'Product A', totalItemSold: 100, totalItemsAvailable: 50, cost: 10 },
  { productName: 'Product B', totalItemSold: 200, totalItemsAvailable: 100, cost: 20 },
  { productName: 'Product C', totalItemSold: 150, totalItemsAvailable: 75, cost: 15 },
  { productName: 'Product A', totalItemSold: 100, totalItemsAvailable: 50, cost: 10 },
  { productName: 'Product B', totalItemSold: 200, totalItemsAvailable: 100, cost: 20 },
  { productName: 'Product C', totalItemSold: 150, totalItemsAvailable: 75, cost: 15 },
];

const Table = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-bold mb-4">TOP 10 Products</h1>
      <table className="w-full max-w-screen-lg bg-white shadow-md rounded-lg overflow-hidden text-black">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-2 px-4">Product Name</th>
            <th className="py-2 px-4">Total Item Sold</th>
            <th className="py-2 px-4">Total Items Available in Stock</th>
            <th className="py-2 px-4">Cost</th>
          </tr>
        </thead>
        <tbody className="bg-gray-100">
          {data.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 px-4 border-r">{item.productName}</td>
              <td className="py-2 px-4 border-r">{item.totalItemSold}</td>
              <td className="py-2 px-4 border-r">{item.totalItemsAvailable}</td>
              <td className="py-2 px-4">{item.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
