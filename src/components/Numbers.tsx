import React, { useState, BaseSyntheticEvent } from 'react';

interface NumbersProps {
  handleClickedNumber(value: string): void;
}

const Numbers = (props: NumbersProps) => {
  const handleClickedNumber = (event: BaseSyntheticEvent) => {
    props.handleClickedNumber(event.target.value);
  };

  return (
    <>
      <div className="row">
        <button className="key numeric" value="7" onClick={handleClickedNumber}>
          7
        </button>
        <button className="key numeric" value="8" onClick={handleClickedNumber}>
          8
        </button>
        <button className="key numeric" value="9" onClick={handleClickedNumber}>
          9
        </button>
      </div>
      <div className="row">
        <button className="key numeric" value="4" onClick={handleClickedNumber}>
          4
        </button>
        <button className="key numeric" value="5" onClick={handleClickedNumber}>
          5
        </button>
        <button className="key numeric" value="6" onClick={handleClickedNumber}>
          6
        </button>
      </div>
      <div className="row">
        <button className="key numeric" value="1" onClick={handleClickedNumber}>
          1
        </button>
        <button className="key numeric" value="2" onClick={handleClickedNumber}>
          2
        </button>
        <button className="key numeric" value="3" onClick={handleClickedNumber}>
          3
        </button>
      </div>

      <div className="row">
        <button
          className="key numeric double"
          value="0"
          onClick={handleClickedNumber}
        >
          0
        </button>
        <button className="key numeric" value="." onClick={handleClickedNumber}>
          .
        </button>
      </div>
    </>
  );
};

export default Numbers;
