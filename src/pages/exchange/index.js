import React from 'react';

const Exhange = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-green-800 text-white">
      <div className="px-4 py-2">
        <h1 className="text-2xl font-bold">LEON</h1>
      </div>
      <div className="px-4 py-2">
        <h2 className="text-xl font-semibold">Setting</h2>
      </div>
      <div className="px-4 py-2">
        <div className="bg-green-700 p-4 rounded-lg mb-4">
          <p className="text-lg">Select language</p>
          <p className="text-sm text-gray-300">English</p>
        </div>
        <div className="bg-green-700 p-4 rounded-lg">
          <p className="text-lg">Choose exchange</p>
          <p className="text-sm text-gray-300">Binance</p>
        </div>
      </div>
    </div>
  );
}

export default Exhange;
