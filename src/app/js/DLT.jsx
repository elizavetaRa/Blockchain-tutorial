import React from 'react';
import Terminology from "./Terminology"

const DLT = props => {
    return (
        <div>
            <h1>The Distributed Ledger Technology</h1>
            <Terminology data = {props.data}/>
        </div>
    );
};

export default DLT;