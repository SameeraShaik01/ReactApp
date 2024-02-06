import React,{ useState } from "react"

export const UseStateEx1=()=>{
    const ar=["hi","venu"]
    const [arr,fun]=useState(ar)
    const handle=()=>
    {
        const ar2="sam"
        fun([...arr,ar2])
    }
    return(
        <>
   <button onClick={handle}>Click to add extra</button>
   <ol>
    {
        arr.map((val,ind)=><React.Fragment key={ind}><li>{val}</li></React.Fragment>)
    }
   </ol>
        </>
    )
}