import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Link} from "@reach/router";
// import 'bootstrap/dist/js/bootstrap.min.js';

function NavBar(){
    return(
<div>
    <nav className="navbar navbar-expand-md navbar-light" id="navbar">
        <Link to="#" className="navbar-brand" disabled>Tuk-CVS</Link>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
                <Link to="/"  className="nav-item nav-link active">Home</Link>
                <Link to="/verify" rel="verify" className="nav-item nav-link">Verify</Link>
            </div>
            <div className="navbar-nav ml-auto">
                <Link to="/login"  className="nav-item nav-link">Login</Link>
            </div>
        </div>
    </nav>
</div>
    );
}

export default NavBar;