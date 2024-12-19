import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/back.jpg";
import cardImage1 from "../assets/cardImage1.png";
import ChartImage1 from "../assets/vis.jpg";
import DashImage1 from "../assets/dashboard.jpg";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/dashboard");
  };

  const handleAbout = () => {
    navigate("/about");
  };

  const handleChart = () => {
    navigate("/chart");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center animate-fadeIn"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-4xl font-bold mb-4 text-white animate-bounce">
        Welcome to Our Patient Health Monitoring System!
      </h1>
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl">
          <div className="max-w-sm bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <a href="/dashboard">
              <div>
                <img
                  className="rounded-t-lg object-cover w-full h-48"
                  src={DashImage1} // Use appropriate image source
                  alt=""
                />
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Go to Dashboard
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Experience the ultimate convenience and control with our
                  sophisticated home automation system. Where control is
                  effortless and possibilities are endless.
                </p>
                <button
                  onClick={handleGetStarted}
                  className="block w-full px-4 py-2 mt-2 text-sm font-semibold text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-200"
                >
                  Go to Dashboard
                </button>
              </div>
            </a>
          </div>
          <div className="max-w-sm bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <a href="/about">
              <div>
                <img
                  className="rounded-t-lg object-cover w-full h-48"
                  src={cardImage1} // Use appropriate image source
                  alt=""
                />
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  About Us
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Let me introduce our outstanding team. They're a group of
                  highly skilled individuals with a passion for excellence.
                  Click here to see our Team.
                </p>
                <button
                  onClick={handleAbout}
                  className="block w-full px-4 py-2 mt-2 text-sm font-semibold text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-200"
                >
                  Go To About Us
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
