import React, { useState } from "react";
import HealthPage from "./HealthPage";

import classes from "./HealthMonitor.module.css";
const HealthMonitor = () => {
  const [heartRate, setHeartRate] = useState(null);
  const [bodyTemperature, setBodyTemperature] = useState(null);
  const [electrocardiogram, setElectrocardiogram] = useState(null);
  const [oxygenSaturation, setOxygenSaturation] = useState(null);
  const [isMonitoring, setIsMonitoring] = useState(false);


  const startMonitoring = () => {
    const fakeHeartRate = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
    const fakeBodyTemperature = (Math.random() * (99 - 97) + 97).toFixed(1);
    const fakeElectrocardiogram = 'Sample ECG';
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
    <div className={classes.topbox}>
      <div className={classes.top}>건강 데이터</div>
      <div className={classes.topsmallbox}>
      <div className={classes.middle}>TODAY</div>
      <div className={classes.positionchange}>
      <table>
        <tr>
          <td>심박수 : {heartRate ? `${heartRate} bpm` : 'N/A'}</td>
          <td>체온 : {bodyTemperature ? `${bodyTemperature} °F` : 'N/A'}</td>
        </tr>
        <tr>
          <td>심전도 : {electrocardiogram ? electrocardiogram : 'N/A'}</td>
          <td>산소포화도 : {oxygenSaturation ? `${oxygenSaturation}%` : 'N/A'}</td>
        </tr>
      </table>

        <div className={classes.buttonposition}>
          {!isMonitoring ? (
            <button className={classes.but} onClick={startMonitoring}>시작</button>
          ) : (
            <>
              <button className={classes.but} onClick={registerData}>등록</button>
              <button className={classes.but2} onClick={stopMonitoring}>정지</button>
            </>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default HealthMonitor;
