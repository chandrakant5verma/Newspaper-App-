
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  static propTypes = {}

  render() {
    
    return (
        <>
      <div>
      <nav className="navbar fixed-top navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" exact to="/">NewsMonky</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" exact to="/">Home</Link>
            </li>
           
            <li><Link className="nav-link" exact to="/business">Business</Link></li> 
             <li><Link className="nav-link" exact to="/entertainment">Entertainment</Link></li>
            <li> <Link className="nav-link" exact to="/general">General</Link></li>
            <li> <Link className="nav-link" exact to="/health">Health</Link></li>
            <li> <Link className="nav-link" exact to="/science">Science</Link></li>
            <li> <Link className="nav-link" exact to="/sports">Sports</Link></li>
            <li> <Link className="nav-link" exact to="/technology">Technology</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    </>
    )
  }
}

export default Navbar