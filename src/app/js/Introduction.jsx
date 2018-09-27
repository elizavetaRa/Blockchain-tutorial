import React from 'react';
import Terminology from "./Terminology"

const Introduction = () => {
    return (
        <div>
            <h1>Introduction</h1>
            <Terminology data = {this.props.data}/>
            <div className="information"></div>
            
        </div>
    );
};

export default Introduction;