import React from 'react';

interface ResultScreenProps {
  readout: number | string;
}

const ResultScreen = ({ readout }: ResultScreenProps) => {
  return (
    <>
      <input className="readout" type="readonly" value={readout} disabled />
    </>
  );
};

export default ResultScreen;
