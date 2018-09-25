import React, { Component } from 'react';
import { throws } from 'assert';
import api from './utils/api'
import Blockchain from './Blockchain';
import Blockchains from './Types';
import DLT from './DLT';
import Mining from './Mining';
import Introduction from './Introduction';

class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            progress: props.user.progress

        }

        console.log(this.state.progress)
        this.updateProgress = this.updateProgress.bind(this)

    }


    componentDidMount() {
        if (this.props.user) {

            api.get("/api/userprogress").then(data => {
                console.log("Data.progress", data.progress)
                this.setState({
                    progress: data.progress
                })
            })

        }




    }

    updateProgress() {

        api.post("/api/userprogress").then(data => {

            this.setState({
                progress: data.progress
            })

        })
    }


    render() {

        if (this.state.progress == 0) {
            return (

                <div>
                    <h2>{this.state.progress}</h2>
                    <Introduction />
                    <button onClick={this.updateProgress}>Next</button>
                </div>
            );
        }

        else if (this.state.progress == 1) {
            return (<div>
                <h2>{this.state.progress}</h2>
                <Blockchains />
                <button onClick={this.updateProgress}>Next</button>
            </div>);
        }
        else if (this.state.progress == 2) {
            return (<div>
                <h2>{this.state.progress}</h2>
                <Blockchain />
                <button onClick={this.updateProgress}>Next</button>
            </div>);
        }

        else if (this.state.progress == 3) {
            return (<div>
                <h2>{this.state.progress}</h2>
                <DLT />
                <button onClick={this.updateProgress}>Next</button>
            </div>);
        }

        else if (this.state.progress == 4) {
            return (<div>
                <h2>{this.state.progress}</h2>
                <Mining />
                <button onClick={this.updateProgress}>Next</button>
            </div>);
        }

        else return (<div>
            <h2>{this.state.progress}</h2>
            Congrats, you are a blockchain expert now</div>)
    }

}

export default Content;