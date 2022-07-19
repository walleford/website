import React from "react";
import navbarBrandImage from './logo.png'
import './customcss.css';

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-xl navbar-dark bg-dark navbar-fixed-top" >
        <div className="navbar-brand" href="#">
              <img src={navbarBrandImage} className='logoStyle' alt=""/>
        </div>

        <div className="navbar" id="navbarNavDropdown">
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                SharePoint Framework
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Training I have Used
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Check Me Out
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar