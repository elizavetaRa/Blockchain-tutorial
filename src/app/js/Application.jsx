import React from 'react'
import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import api from './utils/api'

import Auth from './Auth'
import Home from './Home'
import Navigation from './Navigation'
import Profile from './Profile'
import NotFound from './NotFound'
import Blockchain from "./Blockchain"
import Blockchains from "./Blockchains"
import Mining from "./Mining"
import Policy from "./Policy"
import Proof from "./Proof"
import Concensus from "./Concensus"
import About from "./About"
import Introduction from "./Introduction"



class Application extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: this._setUser(true),
        }

        this._setUser = this._setUser.bind(this)
        this._resetUser = this._resetUser.bind(this)
    }

    componentDidMount() {
        this._setUser()
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation user={this.state.user} />
                    <Switch>
                        <Route exact path="/" render={() => <Introduction user={this.state.user} />} />
                        <Route exact path="/profile" render={() => <Profile user={this.state.user} />} />
                        <Route
                            path="/auth"
                            render={() => <Auth setUser={this._setUser} resetUser={this._resetUser} />}
                        />

                        
                        <Route exact path="/blockchain" render={() => <Blockchain/>}/>
                        <Route exact path="/blockchains" render={() => <Blockchains/>}/>
                        <Route exact path="/mining" render={() => <Mining/>}/>
                        <Route exact path="/concensus" render={() => <Concensus/>}/>
                        <Route exact path="/about" render={() => <About/>}/>
                        <Route exact path="/proof_of_work" render={() => <Proof/>}/>
                        <Route exact path="/privacy_policy" render={() => <Policy/>}/>
                        <Route component={NotFound} />
                    </Switch>
                    
                </div>
            </BrowserRouter>
        )
    }

    _resetUser() {
        this.setState({
            user: null,
        })
    }

    _setUser(init) {
        const token = localStorage.getItem('identity')
        if (token) {
            const decoded = jwtDecode(token)
            delete decoded.iat
            if (init) return decoded
            this.setState({ user: decoded })
        } else {
            return null
        }
    }
}

export default Application
