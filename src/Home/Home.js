import React, { Component } from 'react';

// import Navbar from '../Navbar';
export class Home extends Component {
    render() {
        return (
            
            <div className="hero_area">
                                        

                {/* <Navbar/> */}
            <section className=" slider_section ">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="detail-box">
                                                <h1>
                                                    Victory
                                                    <br />
                                                    <span>
                                                        Infotech
                                                    </span>
                                                </h1>
                                                <p>
                                                Goals help define a company's purpose, 
                                                assist its business growth and achieve its financial objectives. 
                                                Setting specific organizational goals can also help a company measure 
                                                their organization's progress and determine the tasks that must be 
                                                improved to meet those business goals.
                                                </p>
                                                <div className="btn-box">
                                                    <a href="" class="btn-1"> Read more </a>
                                                    <a href="" class="btn-2">Get A Quote</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="img-box">
                                                <img src="images/p1.jpeg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="detail-box">
                                                <h1>
                                                    Victory <br />
                                                    <span>
                                                        Infotech
                                                    </span>
                                                </h1>
                                                <p>
                                                Enhance collaboration across the Department 
                                                through digital solutions to inform and engage internal 
                                                and external audiences.
                                                </p>
                                                <div className="btn-box">
                                                    <a href="" className="btn-1"> Read more </a>
                                                    <a href="" className="btn-2">Get A Quote</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="img-box">
                                                <img src="images/p2.jpeg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="detail-box">
                                                <h1>
                                                    Victory
                                                    <br />
                                                    <span>
                                                        Infotech
                                                    </span>
                                                </h1>
                                                <p>
                                                Ensure the availability of and access to information 
                                                that enables customers to make timely, informed decisions 
                                                by strengthening data and knowledge management approaches.
                                                </p>
                                                <div className="btn-box">
                                                    <a href="" className="btn-1"> Read more </a>
                                                    <a href="" className="btn-2">Get A Quote</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="img-box">
                                                <img src="images/p3.jpeg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item ">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="detail-box">
                                                <h1>
                                                    Victory
                                                    <br />
                                                    <span>
                                                        Infotech
                                                    </span>
                                                </h1>
                                                <p>
                                                Promote an enterprise approach to information sharing 
                                                that fosters decision-making through the use of analytic 
                                                technology.


                                                </p>
                                                <div className="btn-box">
                                                    <a href="" className="btn-1"> Read more </a>
                                                    <a href="" className="btn-2">Get A Quote</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="img-box">
                                                <img src="images/p4.jpeg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="container idicator_container">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>

                            </ol>
                        </div>
                    </div>
                </section>          
                  </div>
        )
    }
}

export default Home
