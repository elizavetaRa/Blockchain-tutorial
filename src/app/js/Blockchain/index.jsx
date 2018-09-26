import React, { Component } from 'react';
import Block from "./Block"
import Form from "./Form"
class Blockchain extends Component {
    

    
    render() {

        console.log(Form)
        
        let a = JSON.stringify(this.props.blockchain);
        return (
            <div>
                <Form/>
                
                <Block block = {this.props.blockchain.genesisBlock}/>

            </div>
        );
    }
}

export default Blockchain;