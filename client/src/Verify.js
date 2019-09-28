import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
function Verify(){
    return(
        <div>
            <h4>Verify Graduate Certificate</h4>
        <div className="container">
        <form action="" method="GET">
            <input type="text" className="search-query form-control" name="query" placeholder="Certificate number.. " minlength="6" maxlength="10" required/>
            <input type="submit" value="Search" rel="verify" className="btn btn-success"/>
        </form>
        </div>
        </div>
    );
}

export default Verify;