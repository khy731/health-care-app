import React from "react";

import classes from "./HealthBox.module.css";
const HealthBox = ({ title, value, isNormal }) => {
  const boxColor = isNormal ? "#DCEEDB" : "#74A77C";

  return (
    <div className={classes.healthbox}>
      <div className={classes.name}>{title}</div>
      <div className={classes.positionchange}>
        <div className={classes.value}>현재 수치 : {value}</div>
        <div className={classes.condition} style={{ backgroundColor: boxColor }}>
          {isNormal ? "정 상" : "비 정 상"}
        </div>
      </div>
    </div>
  );
};

export default HealthBox;
