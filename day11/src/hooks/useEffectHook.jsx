import React,{useState,useEffect} from 'react'



const UseEffectHook = () => {
    const [windowSize,setWindow]=useState(window.innerWidth)
    
    const handleResize=()=>{
        setWindow(window.innerWidth);
    }

    useEffect(
    ()=>{
        window.addEventListener('resize',handleResize)
    //    setWindow(window.innerWidth)
       console.log("render")
       return(
       )=>{

        window.removeEventListener('resize',console.log("component unmounted"))

        }
    },[]
    // [windowSize]
    )


    //if we are using useEffect without dependencies then it will run only on mounting the component once 
    //if we are providing dependencies then it will be recalled again and agian after dependency changes
    //if we want to do something when component unmount then we have to write that in return statement 

  return (
    <div>
        {
            windowSize
        }
    </div>
  )
}

export default UseEffectHook