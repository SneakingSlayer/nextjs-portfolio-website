import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useRouter } from "next/router";
import style from "./appbar.module.css";
import { RiExternalLinkFill } from "react-icons/ri";
import { FaPaperPlane } from "react-icons/fa";
import Scrollspy from "react-scrollspy";
import { Link } from "react-scroll";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { routes } from "../../utils/routes";
export const Appbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Navbar className={style.appbar + " "} variant="dark" fixed="top">
        <Container className="d-flex align-items-center" fluid>
          <Navbar.Brand href="/">
            <img src="/media/logos/lalogo.svg" className={style.logo} />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link
              className={style.appbar_btn + " small"}
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiExternalLinkFill className="mx-1" fontSize={21} /> Resume
            </Nav.Link>
          </Nav>

          <input
            type="checkbox"
            id="menyAvPaa"
            className={style.burger_input}
            onClick={() => (open ? setOpen(false) : setOpen(true))}
            checked={open}
          />
          <label id="burger" htmlFor="menyAvPaa" className={style.burger}>
            <div></div>
            <div></div>
            <div></div>
          </label>

          <nav className={style.mobile_nav}>
            <Scrollspy
              className={"scrollspy " + style.nav_list_mobile}
              items={routes}
              currentClassName="active"
            >
              <Link
                className={style.nav_list_item_mobile}
                onClick={() => setOpen(false)}
                to="home"
                spy={true}
                smooth={true}
                delay={10}
                duration={10}
              >
                <h1 className="mb-0">
                  <span className="fs-6">01. </span>Home
                </h1>
              </Link>
              <Link
                className={style.nav_list_item_mobile}
                onClick={() => setOpen(false)}
                to="about"
                spy={true}
                smooth={true}
                delay={10}
                duration={10}
              >
                <h1 className="mb-0">
                  <span className="fs-6">02. </span>About
                </h1>
              </Link>
              <Link
                className={style.nav_list_item_mobile}
                onClick={() => setOpen(false)}
                to="projects"
                spy={true}
                smooth={true}
                delay={10}
                duration={10}
              >
                <h1 className="mb-0">
                  <span className="fs-6">03. </span>Projects
                </h1>
              </Link>
              <Link
                className={style.nav_list_item_mobile}
                onClick={() => setOpen(false)}
                to="contact"
                spy={true}
                smooth={true}
                delay={10}
                duration={10}
              >
                <h1 className="mb-0">
                  <span className="fs-6">04. </span>Contact
                </h1>
              </Link>
            </Scrollspy>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={style.mobile_navigation_btn}
            >
              <RiExternalLinkFill className="mx-1 fs-6" fontSize={21} /> Resume
            </a>
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
          </nav>
        </Container>
      </Navbar>
    </>
  );
};
