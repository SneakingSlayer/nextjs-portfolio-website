import React, { useState } from "react";
import style from "./left.module.css";
import { CgArrowLongRight } from "react-icons/cg";
import { Nav } from "react-bootstrap";

import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import Scrollspy from "react-scrollspy";
import { Link } from "react-scroll";
import { routes } from "../../utils/routes";
export const LeftPanel = () => {
  return (
    <div className={style.left_panel} id="leftpanel">
      <main className={style.content}>
        {/** <img className={style.accent} src="/media/logos/lalogo.svg" /> */}
        <div></div>
        <div className={style.profile_img_wrapper}>
          <img
            src="/media/images/profilepic.png"
            className={style.profile_img}
          />
        </div>

        {/**  <Nav className={style.nav_list}>
          <Scrollspy
            className={"scrollspy"}
            items={["home", "about", "projects", "contact"]}
            currentClassName="active"
            onUpdate={test}
          >
            <Nav.Link className={style.nav_list_item + " small"} href="#home">
              Home
            </Nav.Link>
            <Nav.Link className={style.nav_list_item + " small"} href="#about">
              About
            </Nav.Link>
            <Nav.Link
              className={style.nav_list_item + " small"}
              href="#projects"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              className={style.nav_list_item + " small"}
              href="#contact"
            >
              Contact
            </Nav.Link>
          </Scrollspy>
        </Nav>*/}

        <nav className={style.nav_list}>
          <Scrollspy
            className={"scrollspy"}
            items={routes}
            currentClassName="active"
          >
            <Link
              className={style.nav_list_item + " small"}
              to="home"
              spy={true}
              smooth={true}
              delay={10}
              duration={10}
            >
              Home
            </Link>
            <Link
              className={style.nav_list_item + " small"}
              to="about"
              spy={true}
              smooth={true}
              delay={10}
              duration={10}
            >
              About
            </Link>
            <Link
              className={style.nav_list_item + " small"}
              to="projects"
              spy={true}
              smooth={true}
              delay={10}
              duration={10}
            >
              Projects
            </Link>
            <Link
              className={style.nav_list_item + " small"}
              to="contact"
              spy={true}
              smooth={true}
              delay={10}
              duration={10}
            >
              Contact
            </Link>
          </Scrollspy>
        </nav>

        <div className={style.sm_icon_group}>
          <div className={style.icon_container}>
            <a
              href="https://www.facebook.com/Lan.Arch22/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF fontSize={16} />
            </a>
          </div>
          <div className={style.icon_container}>
            <a
              href="https://www.instagram.com/thelancethe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram fontSize={16} />
            </a>
          </div>
          <div className={style.icon_container}>
            <a
              href="https://twitter.com/thelancethe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter fontSize={16} />
            </a>
          </div>
          <div className={style.icon_container}>
            <a
              href="https://github.com/SneakingSlayer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub fontSize={16} />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};
