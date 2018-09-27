import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import api from './../utils/api'

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
        console.log('submitting Data', this.state)
        api.post('/api/addblock', {
                data: this.state.data,
            })
            .then(result => {
                console.log(result)
            })
        }
    
}



export default Form;