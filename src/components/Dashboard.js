import React from 'react';
import { FiThermometer, FiAlertCircle, FiActivity } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import DHT from './DHT';
import MotionSensor from './MotionSensor';
import SmokeLevelDisplay from './SmokeDetector';
import HeartRateMonitor from './Heart';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleDHT = () => {
    // Navigate to DHT page
    navigate('/dht');
  };

  const handleMotionSensor = () => {
    // Navigate to Motion Sensor page
    navigate('/motion-sensor');
  };

  const handleSmokeDetector = () => {
    // Navigate to Smoke Detector page
    navigate('/smoke-detector');
  };

  return (
    <div className="bg-gradient-to-r from-gray-600 to-blue-900 min-h-screen flex flex-col text-white">
      <div className="py-8 px-4 text-center">
        <h1 className="text-3xl font-bold mb-2">Welcome to Our Patient Monitoring System</h1>
        <p className="text-lg">Monitor the patient with real-time data from various sensors.</p>
      </div>
      <div className="flex-grow flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="max-w-sm bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-between">
            <div>
              <div className="text-white text-xl font-semibold flex items-center mb-4">
                <FiThermometer className="mr-2" /> DHT Sensor
              </div>
              <DHT />
              <div className="mt-4 text-gray-300">
                <p>Temperature: 25°C</p>
                <p>Humidity: 50%</p>
              </div>
            </div>
          </div>
          <div className="max-w-sm bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-between">
            <div>
              <div className="text-white text-xl font-semibold flex items-center mb-4">
                <FiActivity className="mr-2" /> Motion Sensor
              </div>
              <MotionSensor />
              <div className="mt-4 text-gray-300">
                <p>Motion Detected: Yes</p>
                <p>Last Triggered: 4.30 P.M</p>
              </div>
            </div>
          </div>
          <div className="max-w-sm bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-between">
            <div>
              <div className="text-white text-xl font-semibold flex items-center mb-4">
                <FiAlertCircle className="mr-2" /> Smoke Detector
              </div>
              <SmokeLevelDisplay />
              <div className="mt-4 text-gray-300">
                <p>Smoke Level: Low</p>
                <p>Status: Normal</p>
              </div>
            </div>
          </div>
          <div className="max-w-sm bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-between">
            <div>
              <div className="text-white text-xl font-semibold flex items-center mb-4">
                <FiActivity className="mr-2" /> Patient Heart Rate
              </div>
              <HeartRateMonitor />
              <div className="mt-4">
                {/* Apply custom class to make the text red */}
                <p className="text-red-500">Triggered Warning</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
