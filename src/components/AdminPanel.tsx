import React, { useState } from 'react';
import SegmentForm from './SegmentForm';
import segmentsData from '../data/segments';

const AdminPanel: React.FC = () => {
  const [segments] = useState(segmentsData);

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Admin</h1>
      {segments.map((s) => (
        <SegmentForm key={s.id} segment={s} />
      ))}
    </div>
  );
};

export default AdminPanel;
