import React from 'react';
import Terminology from "./Terminology"

const DLT = props => {
    return (
        <div className="container">
            <h1>The Distributed Ledger Network</h1>
            <hr/>
            <div className="dlt-picture">the picture is here
            </div>
            <Terminology data = {props.data}/>
        </div>
    );
};

export default DLT;