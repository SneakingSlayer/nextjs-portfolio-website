import React from "react";
import { Row, Col } from "react-bootstrap";
import { CgArrowLongRight } from "react-icons/cg";
import style from "./ppleft.module.css";

interface PostLeftProps {
  title: String;
  description: String;
  img: String;
  tags: String[];
  cta: String;
  url: String;
  left: Boolean;
}

export const Project = (props: PostLeftProps) => {
  const { title, description, img, tags, cta, left } = props;
  return left ? (
    <Row className={style.project_wrapper}>
      <Col
        md={6}
        className="d-flex align-items-center text-white order-2 order-md-1 order-lg-1 mt-4"
      >
        <div>
          <h3 className={style.subtitle}>{title}</h3>
          <p className={style.description}>{description}</p>
          <ul className={style.list}>
            {tags.map((tag) => (
              <li className={style.list_item + " small"}>{tag}</li>
            ))}
          </ul>
          <a
            href="https://goolyapp.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={style.btn_naked}
          >
            {cta} &nbsp;
            <CgArrowLongRight fontSize={36} />
          </a>
        </div>
      </Col>
      <Col
        md={6}
        className={
          style.feature_img_wrapper + " order-1 order-md-2 order-lg-2 "
        }
      >
        <img src={`${img}`} className={style.feature_img} />
      </Col>
    </Row>
  ) : (
    <Row className={style.project_wrapper}>
      <Col md={6} className={style.feature_img_wrapper}>
        <img src={`${img}`} className={style.feature_img} />
      </Col>
      <Col md={6} className="d-flex align-items-center mt-4">
        <div>
          <h3 className={style.subtitle}>{title}</h3>
          <p className={style.description}>{description}</p>
          <ul className={style.list}>
            {tags.map((tag) => (
              <li className={style.list_item + " small"}>{tag}</li>
            ))}
          </ul>
          <a
            href={
              process.env.terraProjectRoute === undefined
                ? "/"
                : process.env.terraProjectRoute
            }
            target="_blank"
            rel="noopener noreferrer"
            className={style.btn_naked}
          >
            {cta} &nbsp;
            <CgArrowLongRight fontSize={36} />
          </a>
        </div>
      </Col>
    </Row>
  );
};
