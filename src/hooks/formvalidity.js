import { useRef } from "react"

export const FormUseRef=()=>
{
    const useEmail=useRef()
 const handleSubmit=(event)=>
 {
    event.preventDefault()

    
    alert("submitted")
    console.log(useEmail.current.value)
    
 }
 return(
    <>
   
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label >Email:</label>
      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" ref={useEmail}/>
    </div>
    <div className="form-group">
      <label>Password:</label>
      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
    </div>
    <div className="checkbox">
      <label><input type="checkbox" name="remember"/> Remember me</label>
    </div>
    <button type="submit" className="btn btn-default">Submit</button>
  </form>
    </>
 )
}