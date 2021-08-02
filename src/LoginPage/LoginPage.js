import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions/user.actions';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

       

        // reset login status
        this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
            localStorage.setItem("token" ,"fake-jwt-token")
            this.setState({ submitted: true });
        }
    }

    nextPath(path) {
        this.props.history.push(path);
      }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;

        if(this.state.submitted){
            return <Redirect to="/contact" />
        }


        return (

            <section class="contact_section layout_padding">
                <div class="container">
                    <div class="heading_container">
                        <h2>
                            Login
                        </h2>
                    </div>
                    <div class="">
                        <div class="row">
                            <div class="col-md-6 ">
                                <div class="contact_form-container">
                                    <form name="form" onSubmit={this.handleSubmit}>
                                        <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                            <label htmlFor="username">Username</label>
                                            <input type="text" placeholder="Enter Your Username" name="username" value={username} onChange={this.handleChange}/>
                                            {submitted && !username &&
                                                <div className="help-block">Username is required</div>
                                            }
                                        </div>
                                        <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                            <label htmlFor="password">Password</label>
                                            <input type="password" placeholder="Enter Your Password" name="password" value={password} onChange={this.handleChange}/>
                                            {submitted && !password &&
                                                <div className="help-block">Password is required</div>
                                            }
                                        </div>


                                        <div class=" ">
                                            <button type="submit">
                                                Login
                                            </button>
                                            {loggingIn &&
                                                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                            }
                                            &nbsp;&nbsp;&nbsp; <button onClick={() => this.nextPath('/register')}>Register</button>

                                        </div>
                                    </form>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };

