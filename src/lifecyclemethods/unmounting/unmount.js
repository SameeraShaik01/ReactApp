import { Component } from "react";

export class Unmounting extends Component{
    constructor()
    {
        super()
        this.state={
            isVisible:false
        }

    }
    handleVisible=()=>
    {
        this.setState(
            {isVisible:!this.state.isVisible}
        )
    }
    
    
    render()
    {
        return(
            <>
            <h1>Unmounting</h1>
            <button onClick={this.handleVisible}>Click to alter flag</button>
            {
                this.state.isVisible?
                <Child/>
                :
                <h2>I am invisible</h2>
            }
            </>
        )
    }
}
export class Child extends Component{
    componentWillUnmount()//for cleanup purpose and to prevent memory leak
    {
        alert("I am removed from dom")
    }
    render()
    {
        return(
            <>
            <h2>I am child</h2>
            <h2>Visible</h2>
            </>
        )
    }
}
//draw back:child re-rendering when parent state changing
//PureComponent:component will gets re-rendered only when state or prop changes----stops childern re-rendering