import React from 'react';

const Block = props => {

    let block = props.block
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Index</td>
                        <td>{block.index}</td>
                    </tr>
                    <tr>
                        <td>Timestamp</td>
                        <td>{block.timestamp}</td>
                    </tr>
                    <tr>
                        <td>Hash</td>
                        <td>{block.hash}</td>
                    </tr>
                    <tr>
                        <td>Previous Hash</td>
                        <td>{block.previoushash}</td>
                    </tr>
                    <tr>
                        <td>Data</td>
                        <td>{block.data}</td>
                    </tr>
                    <tr>
                        <td>Nonce</td>
                        <td>{block.nonce}</td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default Block;