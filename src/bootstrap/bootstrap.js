import {Card} from "./card.js"
export const BootStrap=()=>{
   const arr=[{name:"sameera"},{name:"chisty"},{name:"arsath"}]
    return(
        <>
        <div className="container-fluid p-5 bg-primary text-white text-center">
  <h1>My First Bootstrap Page</h1>
  <p>Resize this responsive page to see the effect!</p> 
</div>
  
<div className="container mt-5">
  <div className="row">
   {
    arr.map((val)=>
    <div className="col-sm-4">
    <Card details={val.name}/>
    </div>
  )
   }
  </div>
</div>
</>
    )
}