import React, { useState, useCallback } from 'react';

const RadioButton = ({ type, active, onClick }) => {
  const handleClick = useCallback(() => {
    onClick(type);
  }, [onClick, type]);

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{ backgroundColor: active ? 'gray' : 'white' }}
    >
      {type}
    </button>
  );
};

export default RadioButton;