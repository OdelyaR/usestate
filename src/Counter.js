import { useState, useEffect } from "react";
function Counter(props) {
    const {delta} =props
    const [count, setCount] = useState(1)
    const {max} = props
    const {getRset} = props
    const {needToReset} = props 
    const {setHighest}= props

    useEffect(()=>{
      if(needToReset){
        setCount(0)
        getRset(false)
      }
    },[needToReset, getRset])


    function incr(){
        setCount(
            function(oldCount){
              if (oldCount+delta > max){
                setCount(0)
              } else {
                setHighest(oldCount+delta)
                return oldCount + delta
              }
            }
        )
        console.log(count)
    }
    function rst(){
        getRset(true)
        //setCount(0)
    }
    
    

    return (
      <div>
        <h1>Counter</h1>
        <p>Counter is at {count}</p>
        <button onClick={incr}>Click to add {delta} to Counter</button>
        <button onClick={rst}>Reset Counter</button>
      </div>
    );
  }
  
  export default Counter;