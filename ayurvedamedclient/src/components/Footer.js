import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div>
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
          <li className="nav-item"><Link to="/myorder" className="nav-link px-2 text-muted">My Order</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link px-2 text-muted">About Us</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link px-2 text-muted">Contact Us</Link></li>
          <li className="nav-item"><Link to="/career" className="nav-link px-2 text-muted">Career</Link></li>
        </ul>
        <p className="text-center text-muted">© 2022 Company, Inc</p>
      </footer>
    </div>
  )
}
