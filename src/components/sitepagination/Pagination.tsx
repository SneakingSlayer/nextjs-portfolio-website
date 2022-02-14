import React, { useState, useEffect } from "react";
import style from "./pagination.module.css";
import Scrollspy from "react-scrollspy";
import { Link } from "react-scroll";
import { routes } from "../../utils/routes";
export const Pagination = () => {
  return (
    <div className={style.pagination}>
      <Scrollspy
        className={"scrollspy " + style.list}
        items={routes}
        currentClassName={style.active}
      >
        <Link
          className={style.list_item + " small"}
          to="home"
          spy={true}
          smooth={true}
          delay={10}
          duration={10}
        ></Link>
        <Link
          className={style.list_item + " small"}
          to="about"
          spy={true}
          smooth={true}
          delay={10}
          duration={10}
        ></Link>
        <Link
          className={style.list_item + " small"}
          to="projects"
          spy={true}
          smooth={true}
          delay={10}
          duration={10}
        ></Link>
        <Link
          className={style.list_item + " small"}
          to="contact"
          spy={true}
          smooth={true}
          delay={10}
          duration={10}
        ></Link>
      </Scrollspy>
    </div>
  );
};
