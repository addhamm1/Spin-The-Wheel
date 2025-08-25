import React from 'react';

interface Props {
  result: string | null;
  onClose: () => void;
}

const ResultModal: React.FC<Props> = ({ result, onClose }) => {
  if (!result) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-4 rounded shadow">
        <p className="mb-4">{result}</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ResultModal;
