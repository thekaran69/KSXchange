import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav  className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
  <div className="container p-1">
    <Link className="navbar-brand" to="/">
      <img src='media/images/logo2.svg ' style={{width:"21%"}} />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <form className="d-flex" role="search">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">About</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" to="/product">Products</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" to="/pricing">Pricing</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" to="/support">Support</Link>
        </li>
        
        
      </ul>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar