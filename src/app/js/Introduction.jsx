import React, { Component } from 'react';
import { throws } from 'assert';
import api from './utils/api'

class Introduction extends Component {
    constructor(props) {
        super(props)

        this.state = {

            progress: 0
        }

        this.updateProgress = this.updateProgress.bind(this)

    }


    componentDidMount() {
        if (!this.state.loggedin) {


            api.get("/api/userprogress").then(data => {
                this.state.progress = data
            })



        }
    }

    updateProgress() {
        if (!this.state.loggedin) {


            api.post("/api/userprogress").then(data => {


                this.setState({
                    progress: data
                })



            })
        }
    }


    render() {
        return (
            <div>
                <h1>
                    Intro to BlockLearn
                </h1>

                <p>User progress: {this.state.progress}</p>

                <button onClick={this.updateProgress}>Next</button>
            </div>
        );
    }
}

export default Introduction;