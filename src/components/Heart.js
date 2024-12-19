import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import firebaseConfig from '../config/firebaseConfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const HeartRateMonitor = () => {
  const [heartRate, setHeartRate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    const dbRef = firebase.database().ref('heart_rate');

    // Function to handle changes in heart rate
    const handleHeartRateChange = (snapshot) => {
      const heartRateValue = snapshot.val();
      setHeartRate(heartRateValue);
      setLoading(false);
      determineStatus(heartRateValue);
    };

    try {
      dbRef.on('value', handleHeartRateChange); // Listen to changes in heart rate
    } catch (error) {
      console.error('Error fetching heart rate data: ', error);
      setLoading(false);
    }

    return () => {
      // Cleanup function to remove the listener when component unmounts
      dbRef.off('value', handleHeartRateChange);
    };
  }, []);

  const determineStatus = (heartRateValue) => {
    if (heartRateValue >= 60 && heartRateValue <= 100) {
      setStatusMessage('Your heart rate is within normal range.');
    } else if (heartRateValue < 60) {
      setStatusMessage('Your heart rate is too low. Please consult a doctor.');
    } else {
      setStatusMessage('Your heart rate is too high. Please consult a doctor.');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Heart Rate Monitor</h2>
      {loading ? (
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div>
          <p className="text-lg">Heart Rate: {heartRate} BPM</p>
          <p className="text-lg">{statusMessage}</p>
        </div>
      )}
    </div>
  );
}

export default HeartRateMonitor;
