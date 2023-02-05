import React from "react";
import style from "./pill.module.css";

interface PillGroupProps {
  children: React.ReactNode;
}

export const PillGroup = ({ children }: PillGroupProps) => {
  return <div className={style.pill_group}>{children}</div>;
};
