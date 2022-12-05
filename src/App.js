
import './App.css';
import Counter from './Counter';
import {useState} from 'react';

function App() {
  const [delta, setDelta] = useState(1)
  const [max, setMax]= useState(10)
  const [reset, setReset] = useState(false)
  const [highest, changeHighest]=useState(0)
  
  function handleDelta(event){
  setDelta(Number(event.target.value))
  }

  function handleMax(e){
    setMax(Number(e.target.value))
  }

  function getRset(data){
    console.log(data)
    setReset(data)
  }
  
  function setHighest(num) {
    if (num>highest){
      changeHighest(num)
    }

  }

  return (
    <div className="App">
      <p>Delta:</p>
      <input type = "number" value = {delta} onChange = {handleDelta}/>
      <p>Max counter:</p>
      <input type = "number" value={max} onChange = {handleMax}/>
      <p>Maximum Value {highest}</p>
      <Counter delta= {delta} max = {max} getRset = {getRset} needToReset = {reset} setHighest = {setHighest}/>
      <Counter delta= {delta} max = {max} getRset = {getRset} needToReset = {reset} setHighest = {setHighest}/>
    </div>
  );
}

export default App;
