import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Admin from './Admin';

const Navbar = ({currentuser}) => {
  return (
    <div>
     <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#90EE90' }}>
  <div class="container-fluid">
    <Link to="/" class="navbar-brand" >Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/admin" className="nav-link active" aria-current="page">Admin</Link>
        </li>
        <li class="nav-item">
          <Link to="/user" className="nav-link active" aria-current="page">User</Link>
        </li>
      </ul>
      {currentuser}
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;
