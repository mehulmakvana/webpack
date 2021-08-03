import React, { Component } from 'react';
import { Header } from '../Header/Header';

class Contact extends Component {

    render() {

        return (
            <div>

                <Header />
                <section class="contact_section layout_padding">
                    <div class="container">
                        <div class="heading_container">
                            <h2>
                                Get In touch
                            </h2>
                        </div>
                        <div class="">
                            <div class="row">
                                <div class="col-md-6 ">
                                    <form action="">
                                        <div class="contact_form-container">
                                            <div>
                                                <div>
                                                    <input type="text" placeholder="Full Name" />
                                                </div>
                                                <div>
                                                    <input type="email" placeholder="Email " />
                                                </div>
                                                <div>
                                                    <input type="text" placeholder="Phone Number" />
                                                </div>
                                                <div class="">
                                                    <input type="text" placeholder="Message" class="message_input" />
                                                </div>
                                                <div class=" ">
                                                    <button type="submit">
                                                        Send
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-md-6">
                                    <div class="img-box">
                                        <img src="images/map.png" alt="" />
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



export default Contact;