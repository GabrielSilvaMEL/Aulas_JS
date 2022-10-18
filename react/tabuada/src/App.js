import React from 'react';
import Titulo from './Titulo';
import Titulo2 from './Titulo2';
import Tabuada from './Tabuada';
let n = parseInt(prompt("Informe um número","5"));

function App() {
  return (
    <div>
      <Titulo />
      <Titulo2 />
      <Tabuada />
    </div>
  );
}
export default App;
