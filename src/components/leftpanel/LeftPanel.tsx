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
    <div className={style.left_panel + " py-4"} id="leftpanel">
      <main className={style.content}>
        <div className={style.profile_img_wrapper}>
          <img
            src="/media/logos/lalogo.svg"
            className={style.logo + " d-none d-lg-block"}
          />
        </div>

        <nav className={style.nav_list}>
          <Scrollspy
            className={"scrollspy"}
            items={routes}
            currentClassName="active"
          >
            <Link
              className={style.nav_list_item + " small px-3"}
              to="home"
              spy={true}
              smooth={true}
              delay={10}
              duration={10}
            >
              Home
            </Link>
            <Link
              className={style.nav_list_item + " small px-3"}
              to="about"
              spy={true}
              smooth={true}
              delay={10}
              duration={10}
            >
              About
            </Link>
            <Link
              className={style.nav_list_item + " small px-3"}
              to="projects"
              spy={true}
              smooth={true}
              delay={10}
              duration={10}
            >
              Projects
            </Link>
            <Link
              className={style.nav_list_item + " small px-3"}
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
          <div className={style.icon_container + " py-3"}>
            <a
              href="https://www.facebook.com/Lan.Arch22/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF fontSize={16} />
            </a>
          </div>
          <div className={style.icon_container + " py-3"}>
            <a
              href="https://www.instagram.com/thelancethe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram fontSize={16} />
            </a>
          </div>
          <div className={style.icon_container + " py-3"}>
            <a
              href="https://twitter.com/thelancethe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter fontSize={16} />
            </a>
          </div>
          <div className={style.icon_container + " py-3"}>
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
