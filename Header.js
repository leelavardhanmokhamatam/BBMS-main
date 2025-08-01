import React from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    return(
    <nav className="navbar navbar-expand-lg navbar-light header-container">
        <div className="container-fluid">
            
            <Link className="navbar-brand" to={'/'}>Blood Bank</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbar-containerc" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-link" aria-current="page" to={'/'}>Home</Link>
                <Link className="nav-link" to={'/our-team'}>Our Team</Link>
                <Link className="nav-link" to={'/about'}>About</Link>
                <Link className="nav-link" to={'/contact'}>Contect</Link>
            </div>
            </div>
        </div>
    </nav>   );
}



export default Header;

