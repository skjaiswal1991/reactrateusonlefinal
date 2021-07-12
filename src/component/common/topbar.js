import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Topbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
                <nav  className="navbar navbar-expand-md navbar-light bg-light main-menu" >
                    <div className="container">

                        <button type="button" id="sidebarCollapse" className="btn btn-link d-block d-md-none">
                                    <i className="bx bx-menu icon-single"></i>
                                </button>

                        <Link className="navbar-brand" to="/"><img src="/images/logo.png" /></Link>

                        <div className="collapse navbar-collapse">
                            <form className="form-inline my-2 my-lg-0 mx-auto search-nav-form">
                                <input className="form-control search-nav-input" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn my-2 my-sm-0 search-nav" type="submit"><i className="bx bx-search"></i></button>
                            </form>
                                <ul className="navbar-nav">
                                    <li className="nav-item ml-md-3">
                                    <a className="btn btn-primary header-btn" href="#">LogIn</a>
                                    </li>
                                    <li className="nav-item ml-md-3">
                                    <a className="btn btn-primary header-btn" href="#">Logout</a>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </nav>
         );
    }
}
 
export default Topbar;