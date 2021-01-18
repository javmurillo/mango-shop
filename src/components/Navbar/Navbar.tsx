import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../logo.svg';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLogo = styled.img`
  height: 25px;
`;

export const MangoNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <a href="https://shop.mango.com/" target="_blank" rel="noreferrer">
          <StyledLogo src={logo} alt="logo" />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/exercise1"
                exact
              >
                Normal range
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/exercise2"
                exact
              >
                Fixed values range
              </NavLink>
            </li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
