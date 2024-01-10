import { Component } from "react";





   //class based component
  class FirstClass extends Component{
    //Object way
    state={
        message:"Subscribe",
        isSubscribed:false,
        message1:"Subscribed thanks"
    }
    handleSubscribe=()=>{
       this.setState({
        
        isSubscribed:!this.state.isSubscribed

       },()=>{
        console.log(this.state.isSubscribed)

       })
    }
    
    render()
    {
        return(
            <>
            <button onClick={this.handleSubscribe}>{this.state.isSubscribed?this.state.message1:this.state.message}</button>
            {
                this.state.isSubscribed?<h2>thanks for subscribing</h2>:<h2>Please subscribe</h2>
            }
            </>
        )
    }
   }
   export default FirstClass