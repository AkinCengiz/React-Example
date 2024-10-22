import React, { Component } from "react";

class DateTime extends Component {
    constructor(){
        super();
        this.state = {
            date : "",
            time : ""
        }
    }

    timeShow = setInterval(() => {
        this.setState({
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString()
        });
    }, 1000);

    render(){
        return (
            <div style={{backgroundColor : "black", color : "white", fontSize : "40px", padding : "10px", border : "5px solid red", fontWeight : "bold"}}>
                <p>{this.state.date} - {this.state.time}</p>
            </div>
        );
    };
}
export default DateTime;