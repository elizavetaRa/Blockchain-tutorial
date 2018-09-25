import React from 'react'
import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import api from './utils/api'

import Auth from './Auth'
import Home from './Home'
import Navigation from './Navigation'
import NotFound from './NotFound'
import Blockchain from "./Blockchain"
import Types from "./Types"
import Mining from "./Mining"
import Terminology from "./Terminology"
import DLT from "./DLT"
import Content from "./Content"



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
                        
                        <Route exact path="/" render = {()=><Home/>}/>
                        <Route exact path="/learning" render={() => <Content user={this.state.user} />} />
                        <Route
                            path="/auth"
                            render={() => <Auth setUser={this._setUser} resetUser={this._resetUser} />}
                        />
                   
                        <Route exact path="/blockchain" render={() => <Blockchain/>}/>
                        <Route exact path="/types" render={() => <Types/>}/>
                        <Route exact path="/dlt" render={() => <DLT/>}/>
                        <Route exact path="/mining" render={() => <Mining/>}/>
                        <Route exact path="/terminology" render={() => <Terminology/>}/>
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
