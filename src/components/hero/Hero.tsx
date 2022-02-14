import React from "react";
import style from "./hero.module.css";
import FadeIn from "react-fade-in";

import { CgMouse } from "react-icons/cg";
import { Link } from "react-scroll";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { Row, Col } from "react-bootstrap";
import { ImHtmlFive } from "react-icons/im";
import { CgArrowLongRight } from "react-icons/cg";

import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoReact,
  IoLogoNodejs,
} from "react-icons/io5";

import { SiTypescript } from "react-icons/si";

export const Hero = () => {
  return (
    <div className={style.hero} id="home">
      <main className={"content " + style.hero_content}>
        <Row>
          <Col md={6} className="d-flex align-items-center">
            <FadeIn delay={50}>
              <p className={style.highlight + " mb-0 fw-bold"}>
                Hi, I am Lance.
              </p>
              <h1 className={style.title}>
                I'm a<span className={style.highlight}> Web Developer</span>{" "}
                from Davao City.
              </h1>
              <p className={style.description}>
                I'm a Software Engineer primarily focused on enhancing your web
                experience. I recently graduated from Malayan Colleges, MAPUA as
                a Computer Science major.
              </p>
              <div className={style.btn_group}>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  delay={10}
                  duration={10}
                  className={style.btn_primary}
                >
                  Get In Touch
                </Link>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  delay={10}
                  duration={10}
                  className={style.btn_line}
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
            <FadeIn delay={50}>
              <img src="/media/images/hero.png" className={style.hero_img} />
            </FadeIn>
          </Col>
        </Row>
      </main>
    </div>
  );
};