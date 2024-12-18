import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container style={{ display: "flex" }}>{children}</Container>
    </>
  );
};

export default Layout;
