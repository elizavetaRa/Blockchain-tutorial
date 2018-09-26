import React, { Component } from 'react';
import {BrowserRouter, Link, Route } from 'react-router-dom';
import Terms from "./Terms"
import Definition from "./Definition"

import terms from './data.json'

class Terminology extends Component {
    render() {
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