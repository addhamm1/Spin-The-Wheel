import React from 'react';

interface Props {
  segment: any;
}

const SegmentForm: React.FC<Props> = ({ segment }) => {
  return (
    <div className="mb-2">
      <input
        className="border p-1"
        defaultValue={segment.label}
        aria-label="label"
      />
    </div>
  );
};

export default SegmentForm;
