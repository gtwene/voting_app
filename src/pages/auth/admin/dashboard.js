import React from "react";

function AdminDashboard() {
  return (
    <div className="bg-gray-900 text-gray-100 font-body h-screen flex overflow-hidden">
      {/* Sidebar */}
      <div className="bg-gray-800 py-4 px-2 flex-none w-48">
        <ul className="text-gray-100">
          <li className="mb-4">
            <a
              href="#"
              className="block px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              Dashboard
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="block px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              Users
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="block px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              Settings
            </a>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-black py-4 px-6 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-lg font-bold">Admin Dashboard</span>
          </div>
          <div>
            <img
              className="h-8 w-8 rounded-full object-cover"
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Admin Avatar"
            />
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 bg-white p-8 ">
          <div className="flex space-x-2 justify-between">
            <h1 className="text-2xl font-bold mb-8 text-black">
              Welcome, Admin!
            </h1>
            <div className="">
              <button className="flex items-center bg-gray-900 px-3 space-x-2 py-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 fill-white  stroke-zinc-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="mr-5">Add election</div>
              </button>
            </div>
          </div>

          <div className="w-[90%]">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-500 h-40 relative shadow cursor-pointer rounded-md p-4">
                SRC Election
                <div className="flex justify-end absolute bottom-2 right-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded">
                    Inspect Election
                  </button>
                </div>
              </div>
              <div className="bg-gray-500 h-40 shadow cursor-pointer rounded-md p-4">
                Election
              </div>
              <div className="bg-gray-500 h-40 shadow cursor-pointer rounded-md p-4">
                Election
              </div>
              <div className="bg-gray-500 h-40 shadow cursor-pointer rounded-md p-4">
                Election
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
