import React, { Component } from "react";
import "../styles/Header.css";

export default class Header extends Component {
    render(){
        return (
            <div className="header">
                <h1>Welcome to the Employee Directory</h1>
                <p>Click on Name to sort alphabetically or search find better results.</p>
            </div>
        )
    }
}