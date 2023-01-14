import React from "react";
import style from "./hero.module.css";
import FadeIn from "react-fade-in";

import { Link } from "react-scroll";
import { Row, Col } from "react-bootstrap";
import { CgArrowLongRight } from "react-icons/cg";

export const Hero = () => {
  return (
    <div className={style.hero} id="home">
      <div className={"content " + style.hero_content}>
        <Row className="py-4 ">
          <Col md={6} className="d-flex align-items-center">
            <FadeIn delay={100}>
              <p className={style.highlight + " mb-0 fw-bold"}>
                Hi, I am Lance.
              </p>
              <h1 className={style.title}>
                I&apos;m a
                <span className={style.highlight}> Web Developer</span> from
                Davao City.
              </h1>
              <p className={style.description}>
                I&apos;m a Software Engineer primarily focused on enhancing your
                web experience. I am currently working as a JR Developer at
                Reward Holdings Limited.
              </p>
              <div
                className={
                  "d-flex flex-sm-row flex-column align-items-start align-items-sm-center " +
                  style.btn_group
                }
              >
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  delay={10}
                  duration={10}
                  className={"text-center " + style.btn_primary}
                >
                  Get In Touch
                </Link>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  delay={10}
                  duration={10}
                  className={"my-3 " + style.btn_line}
                >
                  Learn More &nbsp;
                  <CgArrowLongRight fontSize={36} />
                </Link>
              </div>
            </FadeIn>
          </Col>
          <Col
            md={6}
            className={
              style.hero_img_wrapper +
              " d-flex align-items-center justify-content-center"
            }
          >
            <FadeIn delay={100}>
              <img src="/media/images/hero.png" className={style.hero_img} />
            </FadeIn>
          </Col>
        </Row>
      </div>
    </div>
  );
};
