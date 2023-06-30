/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const Navigate=useNavigate();
  return (
    <div className="container-fluid mt-2 bg-transparent">
     <nav className="navbar navbar-expand-lg bg-transparent">
    <div className="container-fluid mx-5">
      <a className="navbar-brand navtitle" href="/">Laup</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse mx-5 d-flex justify-content-center" id="navbarNavAltMarkup">
        <div className="navbar-nav ">
          <a className="nav-link active" aria-current="page" href="#">Menu</a>
          <a className="nav-link" href="#">Our Story</a>
          <a className="nav-link" href="#">Contact</a>
         
        </div>
       
      </div>
      <div className="row">
      <button type="button" className="btn btn-dark" onClick={()=>Navigate('/reservation')}>Make a Reservation</button>
        </div>
    </div>
  </nav>

    </div>
   
  )
}

export default Navbar