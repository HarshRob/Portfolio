import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <>            
                <Navbar id="Navbar" dark sticky="top" expand="md" >
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <div className="container">
                                <div className="row">
                                    <Nav navbar className="p-0">
                                        <div className="col-md">
                                            <NavItem>
                                                <NavLink className="nav-link" to="/home">
                                                    <i className="fa fa-home fa-lg" /> Home
                                                </NavLink>
                                            </NavItem>
                                        </div>
                                        <div className="col-md">
                                            <NavItem>
                                                <NavLink className="nav-link" to="/projects">
                                                    <i className="fa fa-list fa-lg" /> Projects
                                                </NavLink>
                                            </NavItem>
                                        </div>
                                        <div className="col-md">
                                            <NavItem>
                                                <NavLink className="nav-link" to="/about">
                                                    <i className="fa fa-info fa-lg" /> About
                                                </NavLink>
                                            </NavItem>
                                        </div>
                                        <div className="col-md">
                                            <NavItem>
                                                <NavLink className="nav-link" to="/contact">
                                                    <i className="fa fa-address-card fa-lg" /> Contact
                                                </NavLink>
                                            </NavItem>
                                        </div>
                                    </Nav>
                                </div>
                            </div>
                        </Collapse>
                        
                </Navbar>
            </>
        );
    }
}

export default Header;