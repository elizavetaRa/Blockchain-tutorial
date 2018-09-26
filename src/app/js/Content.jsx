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
            progress: props.user.progress,
            blockchain: props.user.blockchain

        }

        console.log(this.state.progress)
        this.updateProgress = this.updateProgress.bind(this)

    }


    componentDidMount() {
        if (this.props.user) {

            api.get("/api/userprogress").then(data => {
                this.setState({
                    progress: data.progress
                })
            })

            api.get("/api/blockchain").then(data=>{
                console.log("Blockchain call", data)
                this.setState({
                    blockchain: data
                })
            }).catch(err=>{
                
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
            
            console.log("Blockchain from Content render", this.state.blockchain)
            
            return (<div>
                <h2>{this.state.progress}</h2>
                <Blockchain blockchain = {this.state.blockchain}/>
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