import React from 'react';
import Terminology from "./Terminology"

const Introduction = props => {
    
    console.log(props)
    
    return (
        <div>
            <h1>Introduction</h1>
            <hr/>
            <Terminology data = {props.data}/>
            <div className="information"></div>
            
        </div>
    );
};

export default Introduction;