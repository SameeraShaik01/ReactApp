import React, { useState } from "react";

export const UseStateEx3=()=>
{
    const initialValue=['apple','banana','mango'];
    const [list,setList]=useState(initialValue)
    
    const handleAddFruit=()=>{
        const fruit="pineapple"
        setList( [...list,fruit])
    }
   return(
    <>
    <h1>Hello</h1>
    <button onClick={handleAddFruit}>Click to add data</button>
    <ol>
    {
        list.map((val,ind)=>
        
            <React.Fragment key={ind}>
           
            <li>{val}</li>
           
            
            </React.Fragment>
          
        )
    }  </ol>
    </>
   )
}