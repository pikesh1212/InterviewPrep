 import React, { useState, useMemo, useCallback } from 'react';


// Component to demonstrate expensive calculation
const ExpensiveCalculation = React.memo(({ value, onClick }) => {
  console.log("ExpensiveCalculation rendered");
  return (
    <div>
      <p>Calculated Value: {value}</p>
      <button onClick={onClick}>Recalculate</button>
    </div>
  );
});

function Optimization() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  // useMemo example - memoizes expensive calculation
  const expensiveValue = useMemo(() => {
    console.log("Expensive calculation running...");
    let result = 0;
    for(let i = 0; i < 1000000; i++) {
      result += number;
    }
    return result;
  }, [number]); // Only recalculate when number changes

  //useCallback example - memoizes callback function

//   const handleClick = useCallback(() => {
//     setNumber(prev => prev + 1);
//   }, []); // Empty dependency array since callback doesn't depend on any values

const handleClick = () => {
    setNumber(prev => prev + 1);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>useMemo and useCallback Demo</h1>
      
      <div>
        <h2>Counter (Unrelated State)</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(c => c + 1)}>
          Increment Counter
        </button>
      </div>

      <hr />

      <div>
        <h2>Expensive Calculation Component</h2>
        <ExpensiveCalculation 
          value={expensiveValue}
          onClick={handleClick}
        />
      </div>

      <div style={{ marginTop: '20px' }}>
        <p>Current Number: {number}</p>
      </div>
    </div>
  );
}

export default Optimization;


// const ExpensiveComponent = React.memo(({click,number,expensiveValue})=>{
//     console.log("ExpensiveComponent rendered")
//     return(
//         <div>
//             <p>Expensive Component</p>
//             <p>Number: {number}</p>
//             <p>Expensive Value: {expensiveValue}</p>

//             <button onClick={click}>Increment Number</button>

//         </div>
//     )

// })

// const Optimization =()=>{
//     const [count,setCount]=useState(0)
//     const [number,setNumber]=useState(1)

//     const expensiveValue = useMemo(()=>{
//         console.log("Expensive calculation running...")
//         let result = 0;
//         for(let i = 0; i < 1000000; i++) {
//             result += number;
//         }
//         return result;
//     },[number])

//     const handleClick = useCallback(()=>{
//         setNumber(prev=>prev+1)
//     },[])

//     return(
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={()=>setCount(count+1)}>Increment</button>
//             <hr />
//             <ExpensiveComponent click={handleClick} number={number} expensiveValue={expensiveValue}/>
//         </div>
//     )
// }
// export default Optimization;
