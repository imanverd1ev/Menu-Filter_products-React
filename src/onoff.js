import React from "react";


class onoff extends React.Component{
    constructor(){
        super();
        this.state={
            case:false,
            marginLeft:"0px"
        }
    }
  Change=()=>{
    this.setState({case: !this.state.case})
  }
    render(){
        return(
            <div>
                <div style={{marginTop:"100px",width:"60px",height:"30px",backgroundColor:this.state.case ? "green" : "red",borderRadius:"40px",display:"flex",alignItems:"center"}}><div onClick={this.Change} style={{width:"30px",height:"30px",backgroundColor:"white",borderRadius:"100%",marginLeft:this.state.case ? "30px" : "0px"}}></div></div>
                <div   style={{marginTop:"20px"}}>Current State <div>{this.state.case ? "on":"off"}</div></div>
            </div>
        )
    }
}

export default onoff;