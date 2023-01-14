import React from "react";
import style from "./about.module.css";
import { Row, Col } from "react-bootstrap";
import { SectionContainer } from "../section/SectionContainer";
import { RiExternalLinkFill, RiGithubFill } from "react-icons/ri";
import {
  SiJavascript,
  SiTypescript,
  SiDjango,
  SiReact,
  SiNodedotjs,
  SiWordpress,
} from "react-icons/si";
export const About = () => {
  return (
    <SectionContainer id="about" title="About Me" count="02">
      <Row>
        <Col md={6} sm={12} className="mb-lg-0 mb-4">
          <div className={style.profile_wrapper}>
            <img src="/media/images/mypic.png" className={style.profile_pic} />
          </div>
        </Col>
        <Col md={6} sm={12} className="mt-lg-0 mt-4">
          <h2 className={style.subtitle}>Lance J. Endaya</h2>
          <p className={style.description}>
            Hi! My name is Lance and I am a Front-End Web Developer from Davao
            city Philippines. I enjoy designing and developing Web Applications
            that are creative, eye-catching, and usable with the aim to ehance
            and ease your browsing experience.
          </p>
          {/*
          <p className={style.description}>
            I&apos;ve been working as a Freelance Web Developer for about a year
            using a variety of modern technologies. My primary focus is building
            or reanimating boring and complex websites.
          </p>
          */}
          <p className={style.description}>
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className={style.list}>
            <li className={style.list_item}>
              <SiJavascript fontSize={18} className="ms-0 mx-1" /> JavaScript
              (ES6+)
            </li>
            <li className={style.list_item}>
              <SiTypescript fontSize={18} className="ms-0 mx-1" /> Typescript
            </li>
            <li className={style.list_item}>
              <SiDjango fontSize={18} className="ms-0 mx-1" /> Django REST
            </li>
            <li className={style.list_item}>
              <SiReact fontSize={18} className="ms-0 mx-1" /> React
            </li>
            <li className={style.list_item}>
              <SiNodedotjs fontSize={18} className="ms-0 mx-1" /> Node.js
            </li>
            <li className={style.list_item}>
              <SiWordpress fontSize={18} className="ms-0 mx-1" /> Wordpress
              Elementor
            </li>
          </ul>

          <div className="d-flex align-items-center mt-4 flex-wrap">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className={style.about_link + " mx-3 ms-0 small"}
            >
              <RiExternalLinkFill fontSize={28} /> &nbsp; Resume
            </a>
            <a
              href="https://github.com/SneakingSlayer"
              target="_blank"
              rel="noopener noreferrer"
              className={style.about_link + " small"}
            >
              <RiGithubFill fontSize={28} /> &nbsp;SneakingSlayer
            </a>
          </div>
        </Col>
      </Row>
    </SectionContainer>
  );
};
