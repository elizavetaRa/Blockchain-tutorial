import React, { Component } from 'react';

class Types extends Component {
    render() {
        return (
            <div className='container'>
                <div className='textbox'>
                    <h1>Public</h1>
                    <p>In a public blockchain anyone can participate, without permission. Public blockchains are based on open source Proof of Work consensus algorithms.
                Anyone can download the code and start running a public node on their local device, validating transactions in the network, thus participating in the consensus process. In such blockchains anyone can send transactions and see valid transactions. The transactions are transparent but pseudonymised.
                It is this type of blockchain the Bitcoin blockchain and the Ethereum platform is built upon and which is expected to disrupt the internet as we know it today.
                 </p>
                </div>
                <div>
                    <div className="textbox">
                        <h1>Federated or Consortium Blockchains</h1>
                        <p>
                            Federated blockchains are operated under the leadership of a group. Unlike the completely decentralized open and public blockchains, the federated blockchains operate under the leadership of a group.
                            This means only selected individuals can access the blockchain. The consensus process is controlled by a pre-selected set of nodes.
                            Federated blockchains are faster and have higher scalability and provide more transaction privacy. Such blockchains are expected to be particularly popular in the banking sector.
                    </p>
                    </div>
                </div>
                <div className='textbox'>
                    <h1>Private</h1>
                    <p> A private blockchain is permissioned. One cannon join unless invited by the network administrators. This type of blockchains can be considered a middle-ground for companies that are interested in the blockchain technology in general but are not comfortable with a level of control offered by public networks. Typically, they seek to incorporate blockchain into their accounting and record-keeping procedures without sacrificing autonomy and running the risk of exposing sensitive data to the public internet.
                    </p>
                </div>
                <div className='textbox'>
                    <h1>Up next</h1>
                    <p>Now that you know some basics about different types of blockchains it is time to learn more about the type which is expected to disrupt society the most: the public permissionless blockchain.</p>
                </div>

            </div>
        );
    }
}

export default Types;

