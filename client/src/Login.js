import React from "react";

function Login(){
    return(
 <div className="login-page">
          <h1 className="l-head">Admin Login</h1>
  <div className="form">
    
    <form method="post"  className="login-form">
      <input type="text" placeholder="username or email" name="username" required/>
      <input type="password" placeholder="password" name="password" required/>
      <button type="submit" name="login">login</button>
    </form>
  </div>
</div>
    );
}

export default Login;