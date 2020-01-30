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
  NavbarText
} from "reactstrap";
import Link from "next/link";

const NavigationBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="faded" light expand="md" fixed="top">
        <NavbarBrand>
          <NavLink href="/">SourceDiv</NavLink>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
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
              <NavLink>Templates</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Integrations</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Docs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>FAQ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Pricing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>SIGN UP FREE</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
