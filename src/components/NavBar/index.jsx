import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import './styles.scss';

export const NavBar = () => {
    return (
        <>
            <Container className='menu'>
                <Navbar.Collapse>
                    <Nav className="menu-links">
                        <Nav.Link href="#home">Dashboard</Nav.Link>
                        <Nav.Link href="#list">List</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </>
    );
};

export default NavBar;
