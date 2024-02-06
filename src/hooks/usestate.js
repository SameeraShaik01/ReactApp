
import { useState } from "react"
export const UseStateEx=()=>
{
    let [arr,fun]=useState(3)

    const counter=()=>
    {
        // fun(arr+1)
        
    
       let interval= setInterval(()=>{fun(arr=arr-1)
        if(arr===0){
            
            clearInterval(interval)
        }},1000)

        return interval

    
    }
    return(
        <>
        <button onClick={counter} style={{color:arr>50?"black":"red"}}>Count {arr}</button>
        
        </>
    )
}