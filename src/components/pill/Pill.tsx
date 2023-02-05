import React from "react";
import style from "./pill.module.css";

interface PillProps {
  title: string;
}

export const Pill = ({ title }: PillProps) => {
  return (
    <div className={style.pill + " small me-2 "}>
      <span>{title}</span>
    </div>
  );
};
