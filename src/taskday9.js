import { Component } from "react";


class Theme extends Component{
    state={
        text:"Box",
        isClicked:false
    }
    handleTheme=()=>
    {
        this.setState({
            isClicked:!this.state.isClicked
        })
    }
    render(){
        return(
          <div style={{background:this.state.isClicked?"red":"black",height:"100px",width:"100px"}}onClick={this.handleTheme}></div>
        )
    }
}
export default Theme