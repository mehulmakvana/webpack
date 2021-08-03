import React, { Component } from 'react';
import { userActions} from '../actions/user.actions';
import {connect} from 'react-redux';
 
class Header extends Component {


  render() {
    return (
        <div >

          <header className="header_section">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg custom_nav-container">
                <a className="navbar-brand" href="index.html">

                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
                  <ul className="navbar-nav  ">
                    <li className="nav-item active">
                      <a className="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
                    </li>
                 
                    <li className="nav-item ">
                      <a className="nav-link" href="/contact">Contact us</a>
                    </li>

                    <li className="nav-item ">
                      <a className="nav-link" href="/login" onClick={this.props.logout}>Logout</a>
                    </li>
                  </ul>

                </div>
              </nav>
            </div>
          </header>

        </div>
    )
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

const connectedHeader = connect(mapState, actionCreators)(Header);
export { connectedHeader as Header };
