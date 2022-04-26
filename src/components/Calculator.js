import React, { useState } from 'react';
import Buttons from './Buttons';
import calculate from '../logic/calculate';
import '../assets/App.css';

const Calculator = () => {
  const [displayed, setDisplayed] = useState({
    total: 0,
    next: '',
    operation: '',
  });
  const onClick = (e) => {
    setDisplayed((state) => calculate(state, e.target.innerText));
  };
  const { total, operation, next } = displayed;

  return (
    <div className="calc-container">
      <h3>Lets do some Math!</h3>
      <div className="calculator">
        <div className="result">
          {total}
          {operation}
          {next}
        </div>
        <Buttons click={onClick} />
      </div>
    </div>
  );
};

export default Calculator;
