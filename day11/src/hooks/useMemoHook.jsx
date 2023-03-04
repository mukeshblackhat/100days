import React,{useState,useMemo,useEffect} from 'react'

const UseMemoHook = () => {
    const [number,setNumber]=useState(0);

    const [dark,setDark]=useState(false);
    const doubleNumber=useMemo(()=>{

        //here when we are doing something else with other vlaues then 
        // also the the slow function is runned again , so to make it more good we need to 
        //  use memo it memoize the thing that have calculated and not changed .
        return slowFunction(number)
    },[number])
    //as we also know that js have refencial equality system 
    //where we create same array with same value then also it state that it is different 
    // so for that also we can use memo which ensure refencial equality 
    const themeStyles=useMemo(()=>{
        return{
        backgroundColor:dark?'black':'white',
        color:dark?'white':'black'
        }
    },[dark])

    useEffect(()=>{
        console.log("Theme changed ");
    },[themeStyles]);
    //to see whether theme is changed or not according to reactjs 
    



  return (
    <div>
        <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>
        <button onClick={()=>setDark(prevDark=>!prevDark)}>Change Theme</button>
        <div style={themeStyles}>{doubleNumber}</div>
    </div>
  )
}
function slowFunction(num){
    console.log('Calling slow function')
    for(let i=0;i<=1000000000;i++){}
    return num*2
}

export default UseMemoHook