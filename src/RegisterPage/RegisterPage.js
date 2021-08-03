import React from 'react';
import { connect } from 'react-redux';

import { userActions, isLoggedIn } from '../actions/user.actions';
import { history } from '../helpers';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (isLoggedIn()) {
            history.push('/');
        }
       
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.username && user.password) {
            this.props.register(user);
        }
    }

    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        const { registering } = this.props;
        const { user, submitted } = this.state;
        return (
            <section class="contact_section layout_padding">
                <div class="container">
                    <div class="heading_container">
                        <h2>
                            Register   </h2>
                    </div>
                    <div class="">
                        <div class="row">
                            <div class="col-md-6 ">
                                <div class="contact_form-container">
                                    <form name="form" onSubmit={this.handleSubmit}>
                                        <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                                            <label >First Name</label>
                                            <input type="text" placeholder="Enter Your Firstname" name="firstName" value={user.firstName} onChange={this.handleChange} />
                                            {submitted && !user.firstName &&
                                                <div className="help-block">First Name is required</div>
                                            }
                                        </div>
                                        <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                                            <label >Last Name</label>
                                            <input type="text" placeholder="Enter Your Lastname" name="lastName" value={user.lastName} onChange={this.handleChange} />
                                            {submitted && !user.lastName &&
                                                <div className="help-block">Last Name is required</div>
                                            }
                                        </div>
                                        <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                                            <label >Username</label>
                                            <input type="text" placeholder="Enter Your Username" name="username" value={user.username} onChange={this.handleChange} />
                                            {submitted && !user.username &&
                                                <div className="help-block">Username is required</div>
                                            }
                                        </div>
                                        <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                                            <label >Password</label>
                                            <input type="password" placeholder="Enter Your Password" name="password" value={user.password} onChange={this.handleChange} />
                                            {submitted && !user.password &&
                                                <div className="help-block">Password is required</div>
                                            }
                                        </div>
                                        <div >
                                            <button type="submit" >Register</button>
                                            {registering &&
                                                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                            }
                                            &nbsp;&nbsp;&nbsp; <button onClick={() => this.nextPath('/login')}>Login</button>

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
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };

