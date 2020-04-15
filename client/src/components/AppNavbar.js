import React, { Component } from 'react'
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
    Container
  } from 'reactstrap';

  class AppNavbar extends Component {
      state = {
          isOpen: false
      }

      toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
      }


      render(){
          return(
              <>
              <Navbar color="dark" dark expand="sm" className="mb-5">
                  <Container>
                      <NavbarBrand href="/">ShoppingList</NavbarBrand>
                      <NavbarToggler onClick={this.toggle}/>
                      <Collapse isOpen={this.state.isOpen} navbar>
                          <Nav class="ml-auto" navbar>
                              <NavItem>
                                  <NavLink href="alexischilinski.com">Website</NavLink>
                              </NavItem>
                          </Nav>
                      </Collapse>
                  </Container>
              </Navbar>
              </>
          )
      }
  }

  export default AppNavbar