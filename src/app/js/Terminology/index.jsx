import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Terms from "./Terms"
import Definition from "./Definition"



class Terminology extends Component {



    render() {
        let terms = this.props.data;
        return (

            <BrowserRouter>
                <div className="terminology">
                    <h2>To learn</h2>
                    <div className="flexy">
                        <Terms terms={terms} />

                        <Route path="/terminology/:id"
                            render={() => {
                                return <Definition terms={terms} />
                            }}
                        />
                    </div>

                </div>
            </BrowserRouter>
        );
    }
}

export default Terminology;