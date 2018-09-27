import React, { Component } from 'react';
import { throws } from 'assert';
import api from './utils/api'
import Blockchain from './Blockchain';
import Blockchains from './Types';
import DLT from './DLT';
import Mining from './Mining';
import Introduction from './Introduction';


import introduction from './Terminology/introduction.json'
import blockchain from './Terminology/blockchain.json'
import variants from './Terminology/variants.json'
import dlt from './Terminology/distributednetwork.json'
import mining from './Terminology/mining.json'


class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            progress: props.user.progress,
            blockchain: props.user.blockchain || {}

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
                
                console.log("Blockchain data recieved", data)
                this.setState({
                    blockchain: data
                }, () => {

                    console.log("Blockchain set State", this.state.blockchain)
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

                <div className="container">
                    <h2>Step {this.state.progress}</h2>
                    <hr/>
                    <Introduction data={introduction}/>
                    <button onClick={this.updateProgress}>Next</button>
                </div>
            );
        }

        else if (this.state.progress == 1) {
            return (<div className="container">
                <h2>Step {this.state.progress}</h2>
                <hr/>
                <Blockchains data={variants}/>
                <button onClick={this.updateProgress}>Next</button>
            </div>);
        }
        else if (this.state.progress == 2) {
            
            console.log("Blockchain from Content render", this.state.blockchain)
            
            return (<div className="container">
                <h2>Step {this.state.progress}</h2>
                <hr/>
                <Blockchain data={blockchain} blockchain = {this.state.blockchain}/>
                <button onClick={this.updateProgress}>Next</button>
            </div>);
        }

        else if (this.state.progress == 3) {
            return (<div className="container">
                <h2>Step {this.state.progress}</h2>
                <hr/>
                <DLT data={dlt}/>
                <button onClick={this.updateProgress}>Next</button>
            </div>);
        }

        else if (this.state.progress == 4) {
            return (<div className="container">
                <h2>Step {this.state.progress}</h2>
                <hr/>
                <Mining data={mining}/>
                <button onClick={this.updateProgress}>Next</button>
            </div>);
        }

        else return (<div className="container">
            Congrats, you are a blockchain expert now</div>)
    }

}

export default Content;