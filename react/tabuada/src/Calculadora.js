import React from 'react';

const [input, setInput] = useState('');

const agregarInput = val => {
  setInput(input + val);
};

const calcularResultado = () => {
  if (input) {
    setInput(evaluate(input));
  } else {
    alert("O valor não é válido.");
  }
};

return (
  <div className='App'>
    <div className='calculadora'>
      <Pantalla input={input} />
      <div className='fila'>
        <button funcClic={agregarInput}>1</button>
        <button funcClic={agregarInput}>2</button>
        <button funcClic={agregarInput}>3</button>
        <button funcClic={agregarInput}>+</button>
      </div>
      <div className='fila'>
        <button funcClic={agregarInput}>4</button>
        <button funcClic={agregarInput}>5</button>
        <button funcClic={agregarInput}>6</button>
        <button funcClic={agregarInput}>-</button>
      </div>
      <div className='fila'>
        <button funcClic={agregarInput}>7</button>
        <button funcClic={agregarInput}>8</button>
        <button funcClic={agregarInput}>9</button>
        <button funcClic={agregarInput}>*</button>
      </div>
      <div className='fila'>
        <button funcClic={calcularResultado}>=</button>
        <button funcClic={agregarInput}>0</button>
        <button funcClic={agregarInput}>.</button>
        <button funcClic={agregarInput}>/</button>
      </div>
      <div className='fila'>
        <buttonClear funcClear={() => setInput('')}>
          C
        </buttonClear>
      </div>
    </div>
  </div>
);
