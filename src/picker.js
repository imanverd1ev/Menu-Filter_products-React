import React from "react";


class picker extends React.Component{
    constructor(){
        super();
        this.state={
            backgroundColor:"red"
        }
    }
    Change=(color)=>{
      this.setState({backgroundColor:color})
    }
    render(){
        return(
            <div>
               <div style={{width:"50px",height:"50px",backgroundColor:this.state.backgroundColor}}></div>
               <button onClick={()=>this.Change('yellow')}>Yellow</button>
               <button onClick={()=>this.Change('red')}>Red</button>
               <button onClick={()=>this.Change('black')}>Black</button>
               <button onClick={()=>this.Change('lightblue')}>lightblue</button>
            </div>
        )
    }
}

export default picker;