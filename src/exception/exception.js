import {Component} from "react"

export class ApiCall extends Component{
    handleData=()=>{
        try{
        fetch("https://fakestoreapi.com/carts")
        .then(response=>response.json())
        .then(response=>console.log("repsopnded"))
        .catch(err=>console.log("error"))
        }catch{
            console.log("404 notfound")
            alert("Something went wrong")
        }
    }
    render()
    {
       
        return(
            <>
          <h2>Api Calling</h2>
          <button onClick={this.handleData}>Click to fetch</button>
          </>
        )
        
    }
}