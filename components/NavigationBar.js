import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from "reactstrap";
import styled from "styled-components";

const StyledDiv = styled.div`
  .navbar-light .navbar-nav .nav-link {
    color: black;
    &:hover {
      color: #0275d8;
    }
  }

  .btn {
    font-size: 12px;
  }

  .dropdown:hover .dropdown-menu {
    display: block;
    margin-top: 0; // remove the gap so it doesn't close
  }

  @media (max-width: 760px) {
    .nav-item {
      display: flex;
      justify-content: flex-end;
    }

    .dropdown {
      display: none;
    }
  }
`;

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <StyledDiv>
      <Navbar color="white" light expand="md" fixed="top">
        <NavbarBrand href="/">SourceDev</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Use cases
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <h3>Team wiki</h3>
                  <p>jfdlkjflkdfjlkdjsflkdjflfkj</p>
                </DropdownItem>
                <DropdownItem>Knowledge base</DropdownItem>
                <DropdownItem>Project documentation</DropdownItem>
                <DropdownItem>Team meeting minutes</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="#">Templates</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Integrations</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Docs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">FAQ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Pricing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <Button color="primary">SIGN UP FREE</Button>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </StyledDiv>
  );
};

export default NavigationBar;
