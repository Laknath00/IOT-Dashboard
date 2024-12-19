import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import firebaseConfig from '../config/firebaseConfig';

// Initialize Firebase if not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const MotionSensor = () => {
  const [motionDetected, setMotionDetected] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dbRef = firebase.database().ref('sensors/motion_detected');
    
    // Function to handle changes in motion detection status
    const handleMotionChange = (snapshot) => {
      const motionValue = snapshot.val();
      setMotionDetected(motionValue === 'Yes');
      setLoading(false);
    };

    try {
      dbRef.on('value', handleMotionChange); // Listen to changes in motion detection status
    } catch (error) {
      console.error('Error fetching data: ', error);
      setLoading(false);
    }

    return () => {
      // Cleanup function to remove the listener when component unmounts
      dbRef.off('value', handleMotionChange);
    };
  }, []);

  return (
    <div className="border border-gray-300 rounded-md p-5 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Motion Sensor</h2>
      {loading ? (
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div>
          {motionDetected ? (
            <div className="text-red-500 animate-pulse">
              <p>Motion Detected</p>
              {/* Additional UI elements or actions related to motion detection */}
            </div>
          ) : (
            <p className="text-gray-500">No Motion Detected</p>
          )}
        </div>
      )}
    </div>
  );
}

export default MotionSensor;
