import React from 'react';

const SpinButton: React.FC = () => {
  const handleClick = () => {
    console.log('spin');
  };
  return (
    <button
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      onClick={handleClick}
    >
      Spin
    </button>
  );
};

export default SpinButton;
