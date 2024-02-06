import { useState } from "react"

export const AddCircle=()=>
{
    let arr=[]
    let[circleArray,fun]=useState(arr)

    const handleCircle=()=>
    {
        
       fun(circleArray=[...circleArray,true])
       
    }
let[bgcolor,changebgcolor]=useState(true)

const changecolor=(ind)=>
{
    changebgcolor(bgcolor=!bgcolor)

}

    return(
        <>
        <button  onClick={handleCircle}>click to add circles</button>
        {
        circleArray.map((val,ind)=>{
            return <div onClick={changecolor(ind)}style={{border:"1px solid black", borderRadius:"50%",height:"100px",width:"100px",backgroundColor:bgcolor?"white":"red"}}></div>

        })
    }

        </>
    )
}