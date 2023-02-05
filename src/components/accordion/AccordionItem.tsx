import React from "react";
import style from "./accordion.module.css";
import { FaAngleDown } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  onClick: () => void;
  active: boolean;
}

export const AccordionItem = ({
  title,
  children,
  onClick,
  active,
}: AccordionItemProps) => {
  return (
    <div className={`${style.accordion_item} ${active && style.active}`}>
      <button className={style.accordion_btn} onClick={onClick}>
        <span>{title}</span>
        <FaAngleDown className={style.accordion_caret} fontSize={24} />
      </button>
      <AnimatePresence>{active && children}</AnimatePresence>
    </div>
  );
};
