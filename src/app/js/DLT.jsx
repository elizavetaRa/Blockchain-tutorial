import React from 'react';
import Terminology from "./Terminology"

const DLT = props => {
    return (
        <div className="container">
            <h1>The Distributed Ledger Network</h1>
            <hr />

            <div className="dlt">
                <div className="dlt-picture">
                </div>
                <Terminology data={props.data} />
            </div>

        </div>
    );
};

export default DLT;