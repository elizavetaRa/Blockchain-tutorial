import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Terms from "./Terms"
import Definition from "./Definition"

import terms from './data.json'

class Terminology extends Component {
    render() {
        return (
            <div className="cotainer">
                <h1>Important Terms</h1>
                <Terms terms={terms} />

                <Route path="/terminology/:term"
                    render={() => {
                        return <Definition terms={terms} />
                    }}
                />

            </div>
        );
    }
}

export default Terminology;