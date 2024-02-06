import React, { Component } from "react";
import Loader from "./loader";

export class Counter extends Component{
    constructor()
    {
        super()
        this.state={
            count:0,
            color:"red",
            posts:[]
        }
    }
    handleIncrement=(data)=>
    {
        this.setState(
            {
                count:this.state.count+data
            }
        )
    }
    static getDerivedStateFromProps(props)
    {
        return {color:props.color} 
    }
    componentDidMount()
    {
        //dom manipulation(only once in a life cycle)
        document.title="lexo"
        
        fetch("https://jsonplaceholder.typicode.com/posts").then(response=>response.json())
        .then(response=>{
            console.log(response)
            this.setState(
                {
                    posts:response
                }
            )
            
        })
    }
    render()
    {
        return(
            <>
            <h3 style={{color:this.state.color}}>Counter</h3>
            <h3>{this.state.count}</h3>
            <button onClick={this.handleIncrement}>CLick to start </button>
            {
                this.state.posts.length>0
                ?
                this.state.posts.map((eachPost,ind)=>
                
                    <React.Fragment key={ind}>
                        <h2>{eachPost.title}</h2>
                        </React.Fragment>
                    
                )
                :
                <Loader/>
            }
            </>
        )
    }
}
// getDerivedStateFromProps