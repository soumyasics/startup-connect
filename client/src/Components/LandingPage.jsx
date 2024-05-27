import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./LandingPage.css"

function LandingPage() {
  return (
    <div>
        <div>
        <Navbar className="landingheader text-light">
        <Navbar.Brand href="#home " className='text-light'>Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          {/* icons */}
          </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
        </div>
    </div>
  )
}

export default LandingPage