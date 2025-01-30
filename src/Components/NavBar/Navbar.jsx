import React from 'react'
import { NavLink } from 'react-router';

function Navbar() {
    return (
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">
          <div className='logo'>
                <NavLink className="navbar-brand page-scroll" to="/">
                  <img src="/img/Logofull.png" alt="Logo image" srcset="" />
                </NavLink>{" "}
              </div>
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                {" "}
                <span className="sr-only">Toggle navigation</span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
              </button>
            </div>
    
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <NavLink to="/" className="page-scroll">
                    Go Global
                  </NavLink>
                </li>

                
                <li className="dropdown">
                  <NavLink className="page-scroll">
                    What's New <span> <i class="fa fa-angle-down" aria-hidden="true"></i></span>
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/new/upcoming-batches">Upcoming Batches</NavLink>
                    </li>
                    <li>
                      <NavLink to="/new/news&update">News & Update</NavLink>
                    </li>
                    <li>
                      <NavLink to="/new/blogs">Blogs</NavLink>
                    </li>
                    <li>
                      <NavLink to="/new/discount">Discount</NavLink>
                    </li>
                  </ul>
                </li>


                <li className="dropdown">
                  <NavLink className="page-scroll">
                    Education <span> <i class="fa fa-angle-down" aria-hidden="true"></i></span>
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/education/mba">MBA</NavLink>
                    </li>
                    <li>
                      <NavLink to="/education/post-graduate">Post Graduate</NavLink>
                    </li>
                    <li>
                      <NavLink to="/education/undergraduate">Undergraduate</NavLink>
                    </li>
                  </ul>
                </li>


                <li className="dropdown">
                  <NavLink className="page-scroll">
                    Counselling <span> <i class="fa fa-angle-down" aria-hidden="true"></i></span>
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/counselling/study-destination">Study Destination</NavLink>
                    </li>
                    <li>
                      <NavLink to="/counselling/stream-selection">Stream Selection</NavLink>
                    </li>
                  </ul>
                </li>

                <li className="dropdown">
                  <NavLink  className="page-scroll">
                    Pre-Requisites <span> <i class="fa fa-angle-down" aria-hidden="true"></i></span>
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/prereq/competitive/gre">Competitive Exams</NavLink>
                    </li>
                    <li>
                      <NavLink to="/prereq/languages/french">Languages</NavLink>
                    </li>
                  </ul>
                </li>
                

                <li>
                  <NavLink to="/predeparture" className="page-scroll">
                    Pre-Departure
                  </NavLink>
                </li>


                <li>
                  <NavLink to="/educational-loan" className="page-scroll">
                    EdLoans
                  </NavLink>
                </li>
                
                
                
                <li>
                  <NavLink to="/about" className="page-scroll">
                    About us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
}

export default Navbar