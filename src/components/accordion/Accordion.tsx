import React from "react";
import style from "./accordion.module.css";

interface AccordionProps {
  children: React.ReactNode;
}

export const Accordion = ({ children }: AccordionProps) => {
  return <div className={style.accordion}>{children}</div>;
};
