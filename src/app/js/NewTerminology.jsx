import React from 'react';
import Terminology from './Terminology'

const NewTerminology = props => {
    return (
        <div className="container">
            <Terminology data = {props.data}/>
        </div>
    );
};

export default NewTerminology;