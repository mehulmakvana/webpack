import React from "react";
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { history } from "./helpers";
import { PrivateRoute } from "./components";
import { alertActions } from "./actions";
import { connect } from 'react-redux';

import { HomePage } from './HomePage';
import { LoginPage } from "./LoginPage";
import { RegisterPage } from "./RegisterPage";
// import Navbar from './Navbar';
import Contact from './Contact/Contact';
// import Home from './Home/Home';
import Footer from './Footer/Footer';



class App extends React.Component {
    constructor(props) {
        super(props);


        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    };



    render() {
        const { alert } = this.props;
        return (
            <div>


                <Router history={history}>
                    {/* <Navbar /> */}
                    <br />

                    <div className="container">
                        <div className="col-sm-8 col-sm-offset-2">
                            {alert.message &&
                                <div className={`alert ${alert.type}`}>{alert.message}</div>
                            }
                        </div>
                    </div>

                    <Switch>
                        <PrivateRoute Route exact path="/" component={HomePage} />
                        <Route path="/login" component={LoginPage} />
                        {/* <Route path="/home" component={Home} /> */}
                        <Route path="/register" component={RegisterPage} />
                        <Route path="/contact" component={Contact} />


                        <Redirect from="*" to="/" />
                    </Switch>
                </Router>

                <Footer />
            </div>
        );
    }
}
function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };