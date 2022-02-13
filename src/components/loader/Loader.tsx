import React from "react";
import style from "./loader.module.css";
export const Loader = () => {
  return (
    <div className={style.bounce}>
      <div className={style.bounce_1}></div>
      <div className={style.bounce_2}></div>
      <div className={style.bounce_3}></div>
    </div>
  );
};
