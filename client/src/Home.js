import React from 'react';
import {Link} from "@reach/router";
function Home(){
    return (
      <div>
        <div className="jumbotron text-center">
          <h3>Welcome to TUK-Certificate verification System</h3>
          <p>
            Instant, Online and Quick verification at the comfort of your house!
          </p>
        </div>
        <div className="verify">
          <Link to="/verify">
            <button className="btn btn-success">Verify Now</button>
          </Link>
        </div>
      </div>
    );
}

export default Home;