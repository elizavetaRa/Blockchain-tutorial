import React, { Component } from 'react';
import Terminology from "./Terminology"


class Mining extends Component {
    render() {
        return (
            <div className="container">
                
                <h1>Mining</h1>
                <Terminology data = {this.props.data}/>

            </div>
        );
    }
}

export default Mining;