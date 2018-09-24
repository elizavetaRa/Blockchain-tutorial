import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = props => {
    return (
        <div className="navigation">
            <div className="container nav-content">
                <div>

                    <span>
                        &nbsp; &nbsp; &nbsp;
                    <Link className="link nav-link" to="/">
                            Home
                    </Link>
                    </span>

                    <span>
                        &nbsp; &nbsp; &nbsp;
                    <Link className="link nav-link" to="/blockchain">
                            Blockchain
                    </Link>
                    </span>

                    <span>
                        &nbsp; &nbsp; &nbsp;
                    <Link className="link nav-link" to="/blockchains">
                            Blockchains
                    </Link>
                    </span>

                    <span>
                        &nbsp; &nbsp; &nbsp;
                    <Link className="link nav-link" to="/mining">
                            Mining
                    </Link>
                    </span>

                    <span>
                        &nbsp; &nbsp; &nbsp;
                    <Link className="link nav-link" to="/concensus">
                            Network Concensus
                    </Link>
                    </span>

                    <span>
                        &nbsp; &nbsp; &nbsp;
                    <Link className="link nav-link" to="/proof_of_work">
                            Proof of Work
                    </Link>
                    </span>

                    <span>
                        &nbsp; &nbsp; &nbsp;
                    <Link className="link nav-link" to="/about">
                            About
                    </Link>
                    </span>

                    <span>
                        &nbsp; &nbsp; &nbsp;
                    <Link className="link nav-link" to="/privacy_policy">
                            Privacy Policy
                    </Link>
                    </span>

                    {props.user && (
                        <span>
                            &nbsp; &nbsp; &nbsp;
                            <Link className="link nav-link" to="/profile">
                                Profile
                            </Link>
                        </span>
                    )}
                </div>
                <div>
                    {props.user ? (
                        <Link className="link nav-link" to="/auth/logout">
                            Logout
                        </Link>
                    ) : (
                            <span>
                                <Link className="link nav-link" to="/auth/sign-in">
                                    Sign in
                            </Link>
                                &nbsp; &nbsp; &nbsp;
                            <Link className="link nav-link" to="/auth/sign-up">
                                    Sign up
                            </Link>
                            </span>
                        )}
                </div>
            </div>
        </div>
    )
}

export default Navigation
