import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: '',

        }

        this._inputChangeHandler = this._inputChangeHandler.bind(this)
        this._submitData = this._submitData.bind(this)
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.data}
                    placeholder="data"
                    onChange={evt => this._inputChangeHandler(evt.target.value)}
                />

                <button onClick={this._submitData}>Create new Block</button>
            </div>
        );

    }

    _inputChangeHandler(newValue) {
        console.log(newValue)
        this.setState({
            data: newValue,
        })
    }

    _submitData() {
        //api call
    }
}



export default Form;