import React, { useState } from "react";
import HealthPage from "./HealthPage";

const HealthMonitor = () => {
  const [heartRate, setHeartRate] = useState(null);
  const [bodyTemperature, setBodyTemperature] = useState(null);
  const [electrocardiogram, setElectrocardiogram] = useState(null);
  const [oxygenSaturation, setOxygenSaturation] = useState(null);
  const [isMonitoring, setIsMonitoring] = useState(false);


  const startMonitoring = () => {
    const fakeHeartRate = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
    const fakeBodyTemperature = (Math.random() * (99 - 97) + 97).toFixed(1);
    const fakeElectrocardiogram = 'Sample ECG data';
    const fakeOxygenSaturation = Math.floor(Math.random() * (100 - 90 + 1)) + 90;

    setHeartRate(fakeHeartRate);
    setBodyTemperature(fakeBodyTemperature);
    setElectrocardiogram(fakeElectrocardiogram);
    setOxygenSaturation(fakeOxygenSaturation);
    setIsMonitoring(true);
  };

  const stopMonitoring = () => {
    setHeartRate(null);
    setBodyTemperature(null);
    setElectrocardiogram(null);
    setOxygenSaturation(null);
    setIsMonitoring(false);
  };

  const registerData = () => {
    console.log("Data registered");
  };

  return (
    <div>
      <h2>건강 데이터</h2>
      <p>심박수: {heartRate ? `${heartRate} bpm` : 'N/A'}</p>
      <p>체온: {bodyTemperature ? `${bodyTemperature} °F` : 'N/A'}</p>
      <p>심전도: {electrocardiogram ? electrocardiogram : 'N/A'}</p>
      <p>산소 포화도: {oxygenSaturation ? `${oxygenSaturation}%` : 'N/A'}</p>

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
