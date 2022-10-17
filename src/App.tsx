import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [numero1, setNumero1] = useState("");//use state retorna um array

  let numSurpresa = Math.floor(Math.random() * 10);

  function validarNumero() {
    if (parseInt(numero1) == numSurpresa)alert("caraca eles são iguais");
    alert(`O número surpresa era ${numSurpresa} e você informou ${numero1}`);
    
  }

 useEffect(()=>{
  if((parseInt(numero1) + 3) == numSurpresa) alert(`Quaaaaase o número surpresa era ${numSurpresa} e você informou ${numero1}`)
 },[numSurpresa]);
  
  return (
    <div className="App">
     <h2>Advinha os números Aeee</h2>
     <form action="">
     <label htmlFor="">Chuta um número Ai: </label>
     <input type="number" name="numero1" id={numero1} value={numero1} onChange={(e) => setNumero1(e.target.value)} placeholder='informe o número...'/>
     </form>
     <button onClick = {validarNumero}>Chutar</button>
    </div>
  );
}

export default App;
