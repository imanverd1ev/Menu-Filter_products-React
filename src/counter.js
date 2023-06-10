import React from "react";


class counter extends React.Component{
    constructor(){
        super();
        this.state={
            count:1
        }
        
    }
    Increment=()=>{
       this.setState({count:this.state.count+1})
    }
    Decrement=()=>{
        this.setState({count:this.state.count-1})
    }
  render(){
          return(
            <div>
                <h2>Count:<span>{this.state.count}</span></h2>
                <button onClick={this.Increment}>Increment</button>
                <button onClick={this.Decrement}>Decrement</button>
            </div>
          )
  }
}
export default counter;