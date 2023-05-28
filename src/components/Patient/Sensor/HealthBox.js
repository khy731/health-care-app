import React from 'react';

const HealthBox = ({ title, value, isNormal }) => {
  const boxColor = isNormal ? '#7CFC00' : '#228B22';

  return (
    <div>
      <h3>{title}</h3>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: boxColor,
          color: '#fff',
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {isNormal ? '정상' : '비정상'}
      </div>
    </div>
  );
};

export default HealthBox;
