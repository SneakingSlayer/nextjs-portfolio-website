import React from "react";
import style from "./footer.module.css";
import { Row, Col } from "react-bootstrap";
export const Footer = () => {
  return (
    <footer className={style.footer}>
      <main className={style.footer_content}>
        <Row>
          <Col
            lg={5}
            md={5}
            className=" text-center text-sm-start order-3 order-lg-0 order-md-0 d-flex justify-content-center justify-content-lg-start justify-content-md-start"
          >
            <p className={style.footer_text + " small"}>
              © 2022 Larch. All Rights Reserved.
            </p>
          </Col>
          <Col lg={2} md={2} className="d-flex justify-content-center">
            <img
              src="/media/logos/lalogobw.svg"
              className={style.footer_brand + " mb-3 mb-lg-0 mb-md-0"}
            />
          </Col>
          <Col
            lg={5}
            md={5}
            className="d-flex justify-content-center justify-content-lg-end justify-content-md-end text-center text-sm-start"
          >
            <p className={style.footer_text + " small"}>
              Designed & Developed by Lance Endaya
            </p>
          </Col>
        </Row>
      </main>
    </footer>
  );
};
