import React from 'react';
import { useRouter } from 'next/router';
function Votal_Portal() {
  const router = useRouter()
  return (
    <div style={{ height: '100%' }}>
    <header className="bg-gray-800 text-white py-4">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-xl font-bold">Election Categories</h1>
      </div>
    </header>

    <div className="max-w-4xl mx-auto md:flex justify-between mt-4">
      <div className="relative bg-white shadow-md rounded-lg px-8 py-6 mb-4 flex-1 mr-2">
        <h2 className="text-lg font-bold mb-2">Elections Category Here</h2>
        <button onClick={()=>{router.push("/ballot")}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded">
          Start Vote
        </button>
        <p className="text-gray-700 mt-2">Description Of the Category Here...</p>
        <button className="absolute bottom-5 right-5 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          View Results
        </button>
      </div>

      <div className="relative bg-white shadow-md rounded-lg px-8 py-6 mb-4 flex-1 mr-2">
        <h2 className="text-lg font-bold mb-2">Elections Category Here</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded">
          Start Vote
        </button>
        <p className="text-gray-700 mt-2">Description Of the Category Here...</p>
        <button className="absolute bottom-5 right-5 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          View Results
        </button>
      </div>
    </div>


    <div className="max-w-4xl mx-auto md:flex justify-between mt-4">
      <div className="relative bg-white shadow-md rounded-lg px-8 py-6 mb-4 flex-1 mr-2">
        <h2 className="text-lg font-bold mb-2">Elections Category Here</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded">
          Start Vote
        </button>
        <p className="text-gray-700 mt-2">Description Of the Category Here...</p>
        <button className="absolute bottom-5 right-5 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          View Results
        </button>
      </div>

      <div className="relative bg-white shadow-md rounded-lg px-8 py-6 mb-4 flex-1 mr-2">
        <h2 className="text-lg font-bold mb-2">Elections Category Here</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded">
          Start Vote
        </button>
        <p className="text-gray-700 mt-2">Description Of the Category Here...</p>
        <button className="absolute bottom-5 right-5 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          View Results
        </button>
      </div>
    </div>


    <div className="max-w-4xl mx-auto md:flex justify-between mt-4">
      <div className="relative bg-white shadow-md rounded-lg px-8 py-6 mb-4 flex-1 mr-2">
        <h2 className="text-lg font-bold mb-2">Elections Category Here</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded">
          Start Vote
        </button>
        <p className="text-gray-700 mt-2">Description Of the Category Here...</p>
        <button className="absolute bottom-5 right-5 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          View Results
        </button>
      </div>

      <div className="relative bg-white shadow-md rounded-lg px-8 py-6 mb-4 flex-1 mr-2">
        <h2 className="text-lg font-bold mb-2">Elections Category Here</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded">
          Start Vote
        </button>
        <p className="text-gray-700 mt-2">Description Of the Category Here...</p>
        <button className="absolute bottom-5 right-5 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          View Results
        </button>
      </div>
    </div>
    <footer className="bg-gray-800 text-white py-3 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center">&copy; 2023 Voting App. All rights reserved.</p>
      </div>
    </footer>
  </div>
  );
}

export default Votal_Portal;
