import React, { Component } from 'react';
import Terminology from "./Terminology"


class Types extends Component {
    render() {

        console.log('the best log', this.props.data);

        return (
            <div className='container'>
                <Terminology data={this.props.data} />

            </div>
        );
    }
}

export default Types;

