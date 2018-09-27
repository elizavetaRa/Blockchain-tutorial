import React, { Component } from 'react';
import Block from "./Block"
import Form from "./Form"
import Terminology from "../Terminology"

class Blockchain extends Component {
    

    
    render() {

        console.log(Form)
        
        let a = JSON.stringify(this.props.blockchain);
        return (
            <div>
                <Form/>
                
                <Block block = {this.props.blockchain.genesisBlock}/>

                <Terminology data = {this.props.data}/>

            </div>
        );
    }
}

export default Blockchain;