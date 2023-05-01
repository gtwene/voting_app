import React from 'react';

function Votal_Portal() {
  return (
    <div>
      
      <div className="max-w-4xl mx-auto flex justify-between">
        <div className="bg-white shadow-md rounded-lg px-8 py-6 mb-4 flex-1 mr-2">
          <h2 className="text-lg font-bold mb-2">Elections Category Here</h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded">
            Start Vote
          </button>
          <p className="text-gray-700 mt-2">Description Of the Category Here...</p>
        </div>
        <div className="bg-white shadow-md rounded-lg px-8 py-6 mb-4 flex-1 ml-2">
          <h2 className="text-lg font-bold mb-2">Elections Category Here</h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Results
          </button>
          {/* <p className="text-gray-700">This is the second card.</p> */}
        </div>
      </div>
    </div>
  );
}

export default Votal_Portal;
