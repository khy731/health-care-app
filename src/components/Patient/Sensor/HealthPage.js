import React from 'react';
import HealthBox from './HealthBox';
import Electrocardiogram from './Electrocardiogram';

import classes from "./HealthPage.module.css";
const HealthPage = () => {
  return (
    <div className={classes.bottombox}>
      <div className={classes.bottomsmallbox}>
      <div className={classes.changeposition}>
        <div className={classes.position}>
          <HealthBox title="심박수" value={75} isNormal={true} />
          <HealthBox title="심전도" value="Normal" isNormal={true} />
        </div>
        <div className={classes.position}>
          <HealthBox title="체온" value={98.6} isNormal={true} />
          <HealthBox title="산소 포화도" value={97} isNormal={false} />
        </div>
      </div>
      </div>
    </div>
  );
};

export default HealthPage;
