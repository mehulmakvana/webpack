import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"; 
import HomePage from '../Pages/HomePage.js';
import LoginPage from '../Pages/LoginPage.js';
import RegisterPage from '../Pages/RegisterPage.js';



export class App extends Component {
    render() {
        return (
            <div>

                <h1>Welcome Webpack</h1>

                <Router>

                    <Switch>
                    
                        <Route exact path="/" component = {HomePage} />
                        <Route path="/login" component = {LoginPage} />
                        <Route path="/register" component = {RegisterPage} />
 
                    </Switch>

                </Router>

            </div>



        )
    }
}

export default App;

// import React from 'react';
// import { Router, Route, Switch, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';

// import { history } from '../helpers';
// import { alertActions } from '../actions';
// import { PrivateRoute } from '../components';
// import {HomePage}  from './Pages/HomePage';
// import { LoginPage } from '../LoginPage';
// import { RegisterPage } from '../RegisterPage';

// class App extends React.Component {
//     constructor(props) {
//         super(props);

//         history.listen((location, action) => {
//             // clear alert on location change
//             this.props.clearAlerts();
//         });
//     }

//     render() {
//         const { alert } = this.props;
//         return (
//             <div className="jumbotron">
//                 <div className="container">
//                     <div className="col-sm-8 col-sm-offset-2">
//                         {alert.message &&
//                             <div className={`alert ${alert.type}`}>{alert.message}</div>
//                         }
//                         <Router history={history}>
//                             <Switch>
//                                 <PrivateRoute exact path="/" component={HomePage} />
//                                 <Route path="/login" component={LoginPage} />
//                                 <Route path="/register" component={RegisterPage} />
//                                 <Redirect from="*" to="/" />
//                             </Switch>
//                         </Router>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// function mapState(state) {
//     const { alert } = state;
//     return { alert };
// }

// const actionCreators = {
//     clearAlerts: alertActions.clear
// };

// const connectedApp = connect(mapState, actionCreators)(App);
// export { connectedApp as App };