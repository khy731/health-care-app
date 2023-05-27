import React from 'react';

import classes from "./HealthBox.module.css";
const HealthBox = ({ title, value, isNormal }) => {
  const boxColor = isNormal ? '#DCEEDB' : '#74A77C';

  return (
    <div className={classes.healthbox}>
      <div className={classes.name}>{title}</div>
      <div className={classes.value} style={{backgroundColor: boxColor}}>
        {value}
      </div>
    </div>
  );
};

export default HealthBox;
