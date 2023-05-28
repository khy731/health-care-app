import React from "react";

import classes from "./HealthBox.module.css";
const HealthBox = ({ title, value, isNormal }) => {

  const boxColor = isNormal ? "#7CFC00" : "#228B22";

  return (
     <div className={classes.healthbox}>
      <div className={classes.name}>{title}</div>
      <div className={classes.value} style={{backgroundColor: boxColor}}>
        현재 수치: {value}
      </div>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: boxColor,
          color: "#fff",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isNormal ? "정상" : "비정상"}
      </div>
    </div>
  );
};

export default HealthBox;
