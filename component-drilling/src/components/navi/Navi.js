import React, { Component } from 'react';
import {

    Navbar,

    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,

} from 'reactstrap';
import './Navi.css';


class Navi extends Component {
    constructor(props) {
        super(props);
        // State tanımlaması
        this.state = {
            isOpen: false,
        };
        // Metodu bind etmek
        this.toggle = this.toggle.bind(this);
    }

    // toggle fonksiyonunu tanımlamak
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar >
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <NavLink className='Navlink' href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='Navlink' href="https://github.com/reactstrap/reactstrap">
                                GitHub
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav >
                            <DropdownToggle className='Navlink' nav caret>
                                Sepet
                            </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem>Option 1</DropdownItem>
                                <DropdownItem>Option 2</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Reset</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Navi;
