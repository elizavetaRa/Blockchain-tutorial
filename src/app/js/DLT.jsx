import React from 'react';
import Terminology from "./Terminology"

const DLT = props => {
    return (
        <div>
            <h1>The Distributed Ledger Network</h1>
            <div className="dlt-picture">the picture is here
            </div>
            <Terminology data = {props.data}/>
        </div>
    );
};

export default DLT;