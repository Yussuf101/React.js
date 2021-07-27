import React, { Component } from 'react'
import black_bell from "./black_bell.png";
import red_bell from    "./red_bell.jpg";

class NewComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             massage:"Please subscribe our website for more containt",
             sub:"subscribe",
             imageURL: red_bell
        };
    }
    styles ={
        fontstyle: "italic",
        color: "Gold"
      };
    buttonchange=()=>{
        this.setState({
            massage: "Hit the bell icon to never miss an update",
            sub:"subscribed"
        })
    }  
    imageChange=()=>{
        this.setState({
            imageURL: black_bell,
            massage: "Thank, Enjoy"
        })
    }
    render() {
        return (
            <div className="App">
                <h3 style={this.styles}>{this.state.massage}</h3>
                <button onClick={this.buttonchange}>{this.state.sub}</button>
                <p/>
                <img style= {{width:"30px", height:"30px"}} 
                src={this.state.imageURL}
                onClick={this.imageChange} alt=""/>
            </div>
        )
    }
}

export default NewComp;
