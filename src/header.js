import React from 'react';
import {Link} from 'react-router-dom';
const Header =()=>{
    return(
        <>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand " href="/">Advertising Board</a>
    </div>
    <ul class="nav navbar-nav ">
      <li><Link to='/'>Home</Link> </li>
      <li><Link to='/post'>Post</Link></li>
      
      <li><Link to='/profile'>Profile</Link></li>
    </ul>
  </div>
</nav>      
                 
        </>
    )
}
export default Header;