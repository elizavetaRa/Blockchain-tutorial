import React from 'react';
import Terminology from "./Terminology"

const Introduction = props => {
    
    console.log(props)
    
    return (
        <div>
            <h1>Introduction</h1>
           
                <p>
                This web application will guide you through the basic elements of a blockchain. Follow the learning steps to get your blockchain certificate. Keep in mind that you can always access the Terminology page in the nav bar if you forgot some of the terms, but in order to get the blocktificate you must walk through all the steps. 

The blockchain illustration on step two is retrieving block-data from the SIGNAL-coin blockchain. 

This website is built as a project for the Ironhack bootcamp. 

                </p>
            
            <hr/>
            <Terminology data = {props.data}/>
            <div className="information"></div>
            
        </div>
    );
};

export default Introduction;