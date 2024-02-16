import { Component } from "react"
import React from "react"
import Loader from "../loader"

export class UpdatePhase extends Component{
    constructor()
    {
        super()
        this.state={
            counter:0,
            color:"red",
            singlePost:{}
        }
    }
    handleClick=()=>
{
    this.setState({
        counter:this.state.counter+1
    }
       
    )
}
static getDerivedStateFromProps(props)
{
    console.log("getDerivedStateFromProps")
 return {color:props.favColor}
}
getSnapshotBeforeUpdate(props,state)

{
 console.log(state)
}
shouldComponentUpdate()
{
    return true
}
// componentDidUpdate(prevProps, prevState) {
//     if (this.state.data.length === 0) { // or compare with `prevState`
//       // make the api call
//       document.title=`counter value${this.state.counter}`
//           fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.counter}`).then(response=>response.json())
//               .then(response=>{
//                   console.log(response)
//                   this.setState(
//                       {
//                          singlePost:response
//                       }
//                   )
                  
//               })
//     }
//   }
componentDidUpdate()
{
    
    document.title=`counter value${this.state.counter}`
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.counter}`).then(response=>response.json())
        .then(response=>{
            console.log(response)
            this.setState(
                {
                   singlePost:response
                }
            )
            
        })
       
}
componentDidMount(){
    document.title=`count ${this.state.counter}`
  }
render()

{
    console.log("render")
    return(
        <>
        <h1>
            Update phase
        </h1>
        <h2 style={{color:this.state.color}}>
            {this.state.counter}
        </h2>
        <button onClick={()=>{this.handleClick()}}>Increment</button>
        {
              <h2>{this.state.singlePost?.title}</h2>
        }
        </>
    )
}
}
//whenever a stae or prop changes component gets re-rendered or re-executed.