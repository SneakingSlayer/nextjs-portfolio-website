import React from "react";
import style from "./banner.module.css";
import { Row, Col } from "react-bootstrap";
import { IoChevronForwardOutline } from "react-icons/io5";
export const Banner = () => {
  return (
    <div className={style.banner}>
      <main className="content">
        <Row>
          <Col md={6}>
            <h1 className={style.title + " mb-0"}>
              Do you want to make a project with me?
            </h1>
          </Col>
          <Col md={4} className="d-flex align-items-center">
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              malesuada risus in leo scelerisque tristique quis quis enim.
              Aliquam erat volutpat. Quisque blandit molestie placerat.
            </p>
          </Col>
          <Col
            md={2}
            className="d-flex align-items-center justify-content-lg-center justify-content-md-center  justify-content-start mt-4 mt-lg-0 mt-md-0 "
          >
            <button className={style.banner_btn}>
              <IoChevronForwardOutline fontSize={32} />
            </button>
          </Col>
        </Row>
      </main>
    </div>
  );
};
