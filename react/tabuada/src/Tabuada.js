import React from 'react';

let n = parseInt(prompt("Informe um número","5"));

// Passando parâmetros para função
// let n = parseInt(props.numero);

function Tabuada() {
    // Passando parâmetros para função
    // let n = parseInt(props.numero);

    // props é adicionado como parâmetro na definição da função 
    // function Tabuada(props) {}

  return (
    <div>
      <h1>Tabuada do {n}</h1>
      <h3>1 x {n} = {1*n}</h3>
      <h3>2 x {n} = {2*n}</h3>
      <h3>3 x {n} = {3*n}</h3>
      <h3>4 x {n} = {4*n}</h3>
      <h3>5 x {n} = {5*n}</h3>
      <h3>6 x {n} = {6*n}</h3>
      <h3>7 x {n} = {7*n}</h3>
      <h3>8 x {n} = {8*n}</h3>
      <h3>9 x {n} = {9*n}</h3>
      <h3>10 x {n} = {10*n}</h3>
    </div>
  );
}

export default Tabuada;