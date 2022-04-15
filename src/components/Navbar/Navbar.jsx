import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'


export default function Navbar() {
  return (

<nav className={`navbar navbar-expand-lg navbar-light  ${style.navbg}`}>
  <a className="navbar-brand" href="#">Noxe</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     
      <li className="nav-item">
        <Link className="nav-link" to="Home">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="Movies">Movies</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="TvShows">Tv Shows</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="Pepole">Pepole</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="About">About</Link>
      </li>
      
      
    </ul>
    <div className="social-links d-flex align-items-center">
        <i className='fab fa-facebook'></i>
        <i className='fab fa-instagram'></i>
        <i className='fab fa-youtube'></i>
        </div>
    <ul className="list-unstyled d-flex auth-links ">
        <li className="nav-item">
        <Link className="nav-link" to="Login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="Register">Register </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="LogOut">LogOut </Link>
      </li>
    </ul>
    
  </div>
</nav>


   ) }
