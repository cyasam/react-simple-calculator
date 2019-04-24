import React, { useState, useEffect } from 'react';

import './Calculator.scss';

import Numbers from './Numbers';
import OtherFunctions from './OtherFunctions';
import ResultScreen from './ResultScreen';
import CalcOperations from './FourOperations';

const Calculator = () => {
  const [calculated, setCalculated] = useState(false);
  const [calcOperator, setCalcOperator] = useState<string | null>(null);
  const [firstNumber, setFirstNumber] = useState('0');
  const [secondNumber, setSecondNumber] = useState('0');
  const [resultNumber, setResultNumber] = useState<number | null>(null);
  const [readout, setReadout] = useState(firstNumber);
  const [acState, setAcState] = useState(true);

  const handleReadout = (value1: string, value2: string) => {
    if (value2 === '.' && value1.includes('.')) {
      return value1;
    }

    if (value1 === '0') {
      if (value2 === '.') {
        return `${value1}${value2}`;
      }
      return value2;
    }

    const number = `${value1}${value2}`;

    return number;
  };

  const handleClickedNumber = (value: string) => {
    setCalculated(false);
    setAcState(false);

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

  const handleCButtonClick = () => {
    setAcState(true);

    if (calcOperator) {
      if (Number(secondNumber)) {
        if (calculated) {
          setFirstNumber('0');
          setResultNumber(null);
          setCalcOperator(null);
        }
        setSecondNumber('0');
        setReadout('0');
      } else {
        setCalcOperator(null);
      }
    } else {
      setFirstNumber('0');
      setReadout('0');
    }
  };

  const handleACButtonClick = () => {
    setFirstNumber('0');
    setSecondNumber('0');
    setReadout('0');
    setResultNumber(null);
    setCalcOperator(null);
  };

  useEffect(() => {
    if (Number(firstNumber)) {
      setAcState(false);
    }
  }, [firstNumber]);

  const handleCalcOperator = (operator: string) => {
    setAcState(false);

    if (operator === '=') {
      calculateResult();
    } else {
      setCalcOperator(operator);
    }
  };

  const handleNegativePositiveButtonClick = () => {
    setAcState(false);
    const secondNumberVal = Number(secondNumber);
    if (calcOperator && secondNumberVal) {
      const readout = (secondNumberVal * -1).toString();
      setSecondNumber(readout);
      setReadout(readout);
    } else {
      const firstNumberVal = Number(firstNumber);
      if (firstNumberVal) {
        const readout = (firstNumberVal * -1).toString();
        setFirstNumber(readout);
        setReadout(readout);
      }
    }
  };

  const handlePercentageButtonClick = () => {
    setAcState(false);
    const secondNumberVal = Number(secondNumber);
    const firstNumberVal = Number(firstNumber);

    if (calcOperator && secondNumberVal) {
      const readout = ((firstNumberVal * secondNumberVal) / 100).toString();
      setSecondNumber(readout);
      setReadout(readout);
    } else {
      if (firstNumberVal) {
        const readout = (firstNumberVal / 100).toString();
        setFirstNumber(readout);
        setReadout(readout);
      }
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
    result = Number(result.toPrecision(12));
    const resultString = result.toString();
    setFirstNumber(resultString);
    setResultNumber(Number(resultString));
    setReadout(resultString);
    setCalculated(true);
  };

  return (
    <div className="calculator">
      <ResultScreen readout={readout} />
      <div className="keys">
        <div className="column">
          <OtherFunctions
            acState={acState}
            handleCButtonClick={handleCButtonClick}
            handleACButtonClick={handleACButtonClick}
            handleNegativePositiveButtonClick={
              handleNegativePositiveButtonClick
            }
            handlePercentageButtonClick={handlePercentageButtonClick}
          />
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
