import React from 'react';
import Wheel from './components/Wheel';
import SpinButton from './components/SpinButton';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Wheel />
      <SpinButton />
    </div>
  );
};

export default App;
