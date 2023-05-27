import React from 'react';
import HealthBox from './HealthBox';
import Electrocardiogram from './Electrocardiogram';

const HealthPage = () => {
  return (
    <div>
      <HealthBox title="체온" value={98.6} isNormal={true} />
      <HealthBox title="산소 포화도" value={97} isNormal={false} />
      <HealthBox title="심전도" value="Normal" isNormal={true} />
      <HealthBox title="심박수" value={75} isNormal={true} />
    </div>
  );
};

export default HealthPage;
