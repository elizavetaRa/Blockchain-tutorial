import React, { Component } from 'react';
import Block from "./Block"
import Form from "./Form"
import Terminology from "../Terminology"

class Blockchain extends Component {
    render() {
        return (
            <div>
                <h1>Build your blockchain</h1>
                <hr />

                <div className="flexy">
                    <Form />

                    <Block block={this.props.blockchain && this.props.blockchain.genesisBlock} />
                    {this.props.blockchain && this.props.blockchain.blocks.map(block => (
                        <Block block={block} />
                    ))}

                    <Terminology data={this.props.data} />
                </div>

                

            </div>
        )
    }
}

export default Blockchain;