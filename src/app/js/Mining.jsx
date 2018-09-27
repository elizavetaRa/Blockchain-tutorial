import React, { Component } from 'react';
import Terminology from "./Terminology"


class Mining extends Component {
    render() {
        return (
            <div className="container">
                
                <h1>Mining</h1>
                <hr/>

                <div className="dlt">
                <div className="mining-pic"></div>
                
                <Terminology data = {this.props.data}/>
                </div>

            </div>
        );
    }
}

export default Mining;