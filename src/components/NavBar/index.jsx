import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import './styles.scss';

export const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <Container className='menu'>
                <Navbar.Collapse>
                    <Nav className="menu-links">
                        <Nav.Link
                            className={`${location.pathname === "/dashboard" ? "active" : ''}`}
                            onClick={() => {
                                navigate("/dashboard");
                            }}
                        >
                            Dashboard
                        </Nav.Link>
                        <Nav.Link
                            className={`${location.pathname === "/listMovies" ? "active" : ''}`}
                            onClick={() => {
                                navigate("/listMovies");
                            }}>List</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </>
    );
};

export default NavBar;
