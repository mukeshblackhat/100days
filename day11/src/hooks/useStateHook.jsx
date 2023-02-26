import React,{useState} from 'react'

const useStateHook = () => {


  const [count,setCount]=useState(0)
  // const [func,setFunc]=useState(dummyfunction())//this will execute the function everytime it re-render
  // const [func1,setFunc1]=useState(()=>{
  //   dummyfunction();
  // })//this will execute function only once at very first time not every time it re-render 

  // const [count,setCount]=useState(function)
  // if we need to call function in state then we need to call it in state and if 
  //if we simply call it then it will execute it every single time it render but if call 
  //by arrow function in the useState then it will execute function only very first time and 
  // not every time we re-render the component 

  const dummyfunction=()=>{
    console.log("render observation");
  }
  

  
  const increment=()=>{
  //  setCount(count+1);
   // setCount(count+1);
    // if we are doing updating state like accesing the state by name 
    // then it will only increace value by one not two according to the code ;
    //better to write like the below one 
    setCount(prevCount=>prevCount+1);
    //if you write it down two times it will update the value two times and 
  }
  return (
    <div>
      <button>
        -
      </button>
       {count}
      <button onClick={()=>increment()}>
        +
      </button>
    </div>
  )
}

export default useStateHook