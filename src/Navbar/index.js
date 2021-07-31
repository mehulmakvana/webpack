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
        
          <NavLink to='/login' activeStyle>
            Login
          </NavLink>

          <NavLink to='/register' activeStyle>
            Registration
          </NavLink>

          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink>
       
        </NavMenu>
        
      </Nav>
    </>
  );
};

export default Navbar;


// import React, { Component } from 'react'

// export class index extends Component {
//   render() {
//     return (
//       <div>
//           <div class="hero_area">

//         <header class="header_section">
//       <div class="container-fluid">
//         <nav class="navbar navbar-expand-lg custom_nav-container">
//           <a class="navbar-brand" href="index.html">
            
//           </a>
//           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//           </button>

//           <div class="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
//             <ul class="navbar-nav  ">
//               <li class="nav-item active">
//                 <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="/login"> Login</a>
//               </li>
             
//               <li class="nav-item">
//                 <a class="nav-link" href="/register"> Registration </a>
//               </li>
//               <li class="nav-item ">
//                 <a class="nav-link" href="/contact">Contact us</a>
//               </li>
//             </ul>
           
//           </div>
//         </nav>
//       </div>
//     </header>

//       </div>
//       </div>
//     )
//   }
// }

// export default index
