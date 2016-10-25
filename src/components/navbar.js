import React from 'react';
import { Button, Modal, Dialog, Header, Title, Body, Footer, ReactDOM, Navbar, Toggle, Collapse, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import { render } from 'react-dom';


const NavbarInstance = React.createClass ({
  render() {
    return(
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Connect with yourself</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#"><span className="glyphicon glyphicon-user"> Login</span></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
} );

export default NavbarInstance;
