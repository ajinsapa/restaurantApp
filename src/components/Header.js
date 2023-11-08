import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>

<Navbar className="bg-warning">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="" 
              src="https://i.postimg.cc/fykXxzK9/png-clipart-logo-restaurant-restaurant-cafe-logo-thumbnail-removebg-preview.png"
              width="50"
              height="40"
              className="d-inline-block align-top"
            />{' '}
          <b className='fs-4'>  One Click Eats</b>
          </Navbar.Brand>
        </Container>
      </Navbar>
 






    </div>
  )
}

export default Header