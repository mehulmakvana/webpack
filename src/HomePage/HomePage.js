import React from 'react';
import { connect } from 'react-redux';

import { userActions } from '../actions';
import Home from "../Home/Home";
import { Header } from '../Header/Header';
class HomePage extends React.Component {


    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }



    render() {
        const { user, users } = this.props;


        return (
            <div>

                <Header />

                <section className="about_section layout_padding">
                    <div className="container">
                        <div className="heading_container">
                            <h2><span>User</span> Information</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-6 px-0">
                                <div className="img_container">
                                    <div className="img-box">
                                        <img src="assets/images/user.jpeg" alt="" />
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6 px-0">
                                <div className="detail-box">
                                    <h3>
                                        Hi {user && user.firstName} <br />
                                        You're logged in with React!!
                                    </h3>
                                    <br />
                                    <h3>All Registered Users:</h3>
                                    <div>
                                        {users.loading && <em>Loading users...</em>}
                                        {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                                        {users.items &&
                                            <ul>
                                                {users.items.map((user, index) =>
                                                    <li key={user.id}>
                                                        {user.firstName + ' ' + user.lastName}
                                                        {
                                                            user.deleting ? <em> - Deleting...</em>
                                                                : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                                        }
                                                    </li>
                                                )}
                                            </ul>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Home />

            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };

