import React, { Component } from 'react';
import {BrowserRouter, Link, Route } from 'react-router-dom';
import Terms from "./Terms"
import Definition from "./Definition"



class Terminology extends Component {

    

    render() {
        let terms = this.props.data;
        return (
            
        <BrowserRouter>
            <div className="container">
                <h1>Important Terms</h1>
                <Terms terms={terms} />

                <Route path="/terminology/:id"
                    render={() => {
                        return <Definition terms={terms} />
                    }}
                />

            </div>
            </BrowserRouter>
        );
    }
}

export default Terminology;