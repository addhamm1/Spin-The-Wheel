import React from 'react';
import segments from '../data/segments';

/**
 * Placeholder wheel component. In a real app this would render an SVG or canvas
 * with spin animation. For now we simply list the segment labels.
 */
const Wheel: React.FC = () => {
  return (
    <div className="w-64 h-64 border-4 border-gray-300 rounded-full flex items-center justify-center">
      <ul>
        {segments.map((s) => (
          <li key={s.id}>{s.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default Wheel;
