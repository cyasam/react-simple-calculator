import React, { useState, useEffect } from 'react';

import './Calculator.scss';

import Numbers from './Numbers';
import OtherFunctions from './OtherFunctions';
import ResultScreen from './ResultScreen';
import CalcOperations from './FourOperations';

const Calculator = () => {
  const [calcOperator, setCalcOperator] = useState<string | null>(null);
  const [firstNumber, setFirstNumber] = useState('0');
  const [secondNumber, setSecondNumber] = useState('0');
  const [resultNumber, setResultNumber] = useState<number | null>(null);
  const [readout, setReadout] = useState(firstNumber);

  const handleReadout = (value1: string, value2: string) => {
    const number = parseInt(value1) ? `${value1}${value2}` : value2;

    return number;
  };

  const handleClickedNumber = (value: string) => {
    if (calcOperator) {
      let readout = secondNumber;
      if (resultNumber) {
        readout = handleReadout('0', value);
        setResultNumber(null);
      } else {
        readout = handleReadout(secondNumber, value);
      }

      setSecondNumber(readout);
      setReadout(readout);
    } else {
      let readout = handleReadout(firstNumber, value);
      setFirstNumber(readout);
      setReadout(readout);
    }
  };

  const handleCalcOperator = (operator: string) => {
    if (operator === '=' || (operator !== calcOperator && !resultNumber)) {
      calculateResult();
    }

    if (operator !== '=') {
      setCalcOperator(operator);
    }
  };

  const calculateResult = () => {
    let result;

    const value1 = parseFloat(firstNumber);
    const value2 = parseFloat(secondNumber);

    switch (calcOperator) {
      case '÷':
        result = value1 / value2;
        break;
      case 'x':
        result = value1 * value2;
        break;
      case '-':
        result = value1 - value2;
        break;
      default:
        result = value1 + value2;
    }

    const resultString = result.toString();
    setFirstNumber(resultString);
    setResultNumber(result);
    setReadout(resultString);
  };

  return (
    <div className="calculator">
      <ResultScreen readout={readout} />
      <div className="keys">
        <div className="column">
          <OtherFunctions />
          <Numbers handleClickedNumber={handleClickedNumber} />
        </div>

        <div className="column four-operations">
          <CalcOperations handleCalcOperator={handleCalcOperator} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
