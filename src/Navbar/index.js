import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,

} from './Navbar';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
        </NavLink>
        <Bars />
        <NavMenu>

          <NavLink to='/' activeStyle>
            Home
          </NavLink>

          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink>

          <NavLink to='/login' activeStyle>
            Logout
          </NavLink>

        </NavMenu>

      </Nav>
    </>
  );
};

export default Navbar;


// import React, { Component } from 'react';

// class index extends Component {
//   render() {
//     return (
//         <div >

//           <header className="header_section">
//             <div className="container-fluid">
//               <nav className="navbar navbar-expand-lg custom_nav-container">
//                 <a className="navbar-brand" href="index.html">

//                 </a>
//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                   <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
//                   <ul className="navbar-nav  ">
//                     <li className="nav-item active">
//                       <a className="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
//                     </li>
//                     {/* <li className="nav-item">
//                       <a className="nav-link" href="/login"> Login</a>
//                     </li>

//                     <li className="nav-item">
//                       <a className="nav-link" href="/register"> Registration </a>
//                     </li> */}
//                     <li className="nav-item ">
//                       <a className="nav-link" href="/contact">Contact us</a>
//                     </li>

//                     <li className="nav-item ">
//                       <a className="nav-link" href="/login">Logout</a>
//                     </li>
//                   </ul>

//                 </div>
//               </nav>
//             </div>
//           </header>

//         </div>
//     )
//   }
// }

// export default index
