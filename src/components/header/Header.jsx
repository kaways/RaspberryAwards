import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Header.scss";

const Header = () => {
  return (
    <Container className="header">
      <Row>
        <span
          style={{
            marginRight: "1rem",
            fontSize: "22px",
          }}
        >
          Frontend React Test
        </span>
      </Row>
    </Container >
  );
};

export default Header;

