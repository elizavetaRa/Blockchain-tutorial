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


                    {props.user ? (
                        <span>

                            <span>
                                &nbsp; &nbsp; &nbsp;
                        <Link className="link nav-link" to="/learning">
                                    Learning
                        </Link>
                            </span>


                            <span>
                                &nbsp; &nbsp; &nbsp;
                        <Link className="link nav-link" to="/types">
                                    Variants
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
                        <Link className="link nav-link" to="/dlt">
                                    Distributed Network
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
                        <Link className="link nav-link" to="/terminology">
                                    Terminology
                        </Link>
                            </span>


                            &nbsp; &nbsp; &nbsp;
                            <Link className="link nav-link" to="/auth/logout">
                                Logout
                        </Link>
                        </span>
                    ) : (


                            <span>
                                &nbsp; &nbsp; &nbsp;
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
        </div >
    )
}

export default Navigation
