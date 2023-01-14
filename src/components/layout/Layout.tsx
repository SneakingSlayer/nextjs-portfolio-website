import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Appbar } from "../appbar/Appbar";
import { Footer } from "../footer/Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container className="px-0 ps-0 h-100 position-relative" fluid>
      <Appbar />
      <Row className="mx-0 ms-0 h-100">
        <Col
          lg={12}
          md={12}
          className={`offset-lg-1-comment px-0 ps-0 overflow-auto`}
          data-bs-spy="scroll"
          data-bs-target="#leftpanel"
          data-bs-offset="0"
        >
          {children}
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};
