import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>


                <section class="info_section ">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="info_logo">
                                    <a class="navbar-brand" href="index.html">
                                        <img src="images/info-logo.png" alt="" />
                                        <span>
                                            Victory
                                        </span>
                                    </a>
                                    <p>
                                        Victory Infotech   
                                        </p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="info_links">
                                    <h5>
                                        Useful Link
                                    </h5>
                                    <ul>
                                        <li>
                                            <a href="">
                                                victoryinfotech@mail.com
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="info_info">
                                    <h5>
                                        Contact Us
                                    </h5>
                                    <p>
                                        RohanBhai : 9874563210<br />
                                        SagarBhai : 9632145807
                                     
                                    </p>
                                </div>
                            </div>


                            <div class="col-md-3">
                                <div class="info_form ">
                                    <h5>
                                        NewsLetter
                                    </h5>
                                    <form action="">
                                        <input type="email" placeholder="Enter your email" />
                                        <button>
                                            Subscribe
                                        </button>
                                    </form>
                                    <div class="social_box">
                                        <a href="">
                                            <img src="images/fb.png" alt="" />
                                        </a>
                                        <a href="">
                                            <img src="images/twitter.png" alt="" />
                                        </a>
                                        <a href="">
                                            <img src="images/linkedin.png" alt="" />
                                        </a>
                                        <a href="">
                                            <img src="images/instagram.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



            </div>
        )
    }
}

export default Footer
