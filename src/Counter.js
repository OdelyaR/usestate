import { useState } from "react";
function Counter(props) {
    const {delta} =props
    const [count, setCount] = useState(1)
    const {max} = props
    function incr(){
        setCount(
            function(oldCount){
              if (oldCount+delta > max){
                setCount(0)
              }else{
                return oldCount + delta
              }
            }
        )
        console.log(count)
    }
    function rst(){
        setCount(0)
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