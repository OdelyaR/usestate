import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(1)
    function incr(){
        setCount(
            function(oldCount){
                return oldCount +1
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
        <button onClick={incr}>Click to add 1 to Counter</button>
        <button onClick={rst}>Reset Counter</button>
      </div>
    );
  }
  
  export default Counter;