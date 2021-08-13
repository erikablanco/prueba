import { useState } from "react";


export const Counter = () => {

    const [count, setCount] = useState(5);
    

    return (

     <div>
         <button onClick={ ()=> setCount (count + 5)}> + </button>
          <h5> Count is {count}</h5>
         <button onClick={() => setCount (count - 5)}> - </button>

        <div>
           <button onClick= { () => setCount (5)}>
             Reset
           </button>
        </div>
        
      </div>
    ); 
  };