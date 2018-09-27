import React from 'react';
import Terminology from "./Terminology"

const Introduction = props => {
    
    console.log(props)
    
    return (
        <div>
            <h1>Introduction</h1>
           
                <p>
                The BlockLearn learning platform will guide you through the main elements of  a blockchain. Each step will have explanations of the technical terms. 
Keep in mind that you can always access the Terminology page in the nav bar if you forgot some of the terms, but in order to get the blocktificate you must walk through all the steps. 

<br/> <br/>  At this stage you should familiarize yourself with the essence of a blockchain, it’s underlying technology and it’s main features: immutability and decentralization.                 </p>
            
            <hr/>
            <Terminology data = {props.data}/>
            <div className="information"></div>
            
        </div>
    );
};

export default Introduction;