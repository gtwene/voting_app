import React from 'react';

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-80">
        <h2 className="text-center text-2xl font-bold text-gray-700 mb-4">Login To Vote</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
            Student ID
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Pin
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Login
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Pin?
          </a>
        </div>
        <hr className="my-6 border-gray-300 w-full" />
        <div className="text-center">
          <p className="text-gray-700">Don't have Username?</p>
          <a className="inline-block font-bold text-sm text-indigo-500 hover:text-indigo-800" href="#">
            Contact your Administrator
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
