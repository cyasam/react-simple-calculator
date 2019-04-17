import React, { BaseSyntheticEvent } from 'react';

interface CalcOperationsProps {
  handleCalcOperator(value: string): void;
}

const CalcOperations = (props: CalcOperationsProps) => {
  const handleCalcOperator = (event: BaseSyntheticEvent) => {
    props.handleCalcOperator(event.target.value);
  };
  return (
    <>
      <button className="key function" value="÷" onClick={handleCalcOperator}>
        ÷
      </button>
      <button className="key function" value="x" onClick={handleCalcOperator}>
        ×
      </button>
      <button className="key function" value="-" onClick={handleCalcOperator}>
        −
      </button>
      <button className="key function" value="+" onClick={handleCalcOperator}>
        +
      </button>
      <button
        className="key function last"
        value="="
        onClick={handleCalcOperator}
      >
        =
      </button>
    </>
  );
};

export default CalcOperations;
