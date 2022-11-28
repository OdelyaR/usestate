
import './App.css';
import Counter from './Counter';
import {useState} from 'react';

function App() {
  const [delta, setDelta] = useState(1)
  const [max, setMax]= useState(1)

  function handleDelta(event){
  setDelta(Number(event.target.value))
  }

  function handleMax(e){
    setMax(Number(e.target.value))
  }
  return (
    <div className="App">
      <p>Delta:</p>
      <input type = "number" value = {delta} onChange = {handleDelta}/>
      <p>Max counter:</p>
      <input type = "number" value={max} onChange = {handleMax}/>
      <Counter delta= {delta} max = {max}/>
      <Counter delta= {delta} max = {max}/>
    </div>
  );
}

export default App;
