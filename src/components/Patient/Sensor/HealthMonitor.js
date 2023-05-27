import React, { useState } from 'react';
import HealthPage from './HealthPage';

const HealthMonitor = () => {
  const [isMonitoring, setIsMonitoring] = useState(false);

  const startMonitoring = () => {
    setIsMonitoring(true);
  };

  const stopMonitoring = () => {
    setIsMonitoring(false);
  };

  const registerData = () => {
    console.log('Data registered');
  };

  return (
    <div>
      <HealthPage />

      {!isMonitoring ? (
        <button onClick={startMonitoring}>시작</button>
      ) : (
        <>
          <button onClick={registerData}>등록</button>
          <button onClick={stopMonitoring}>정지</button>
        </>
      )}
    </div>
  );
};

export default HealthMonitor;
