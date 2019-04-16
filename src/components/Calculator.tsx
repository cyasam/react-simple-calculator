import React from 'react';

import './Calculator.scss';

import Numbers from './Numbers';
import FourOperations from './FourOperations';
import OtherFunctions from './OtherFunctions';
import ResultScreen from './ResultScreen';

const Calculator = () => {
  return (
    <div className="calculator">
      <ResultScreen />
      <div className="keys">
        <div className="column">
          <OtherFunctions />
          <Numbers />
        </div>

        <div className="column four-operations">
          <FourOperations />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
