import React from "react";

import classes from "./HealthBox.module.css";
const HealthBox = ({ title, value, isNormal }) => {
  const boxColor = isNormal ? "#7CFC00" : "#228B22";

  return (
    <div className={classes.healthbox}>
      <div className={classes.name}>{title}</div>
      <div>현재 수치: {value}</div>
      <div className={classes.value} style={{ backgroundColor: boxColor }}>
        {isNormal ? "정상" : "비정상"}
      </div>
    </div>
  );
};

export default HealthBox;
