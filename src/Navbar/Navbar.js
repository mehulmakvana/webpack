import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (

            <div>
                <header id="header" class="header fixed-top">
                    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">


                        <nav id="navbar" class="navbar">
                            <ul>
                                <li><a class="nav-link scrollto active" href="/">Home</a></li>

                                <li><a class="nav-link scrollto" href="/login">Login</a></li>

                                <li><a class="nav-link scrollto" href="/register">Registration</a></li>

                                <li><a class="nav-link scrollto" href="/contact">Contact</a></li>
                            </ul>
                          
                        </nav>

                    </div>
                </header>
            </div>
        )
    }
}

export default Navbar;
