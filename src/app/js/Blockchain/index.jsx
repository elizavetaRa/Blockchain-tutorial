import React, { Component } from 'react';
import Block from "./Block"
class Blockchain extends Component {
    

    
    render() {

        
        let a = JSON.stringify(this.props.blockchain);
        return (
            <div>
                <Block block = {this.props.blockchain.genesisBlock}/>

            </div>
        );
    }
}

export default Blockchain;