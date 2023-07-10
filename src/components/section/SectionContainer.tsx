import React from "react";
import style from "./section.module.css";
interface SectionContainerProps {
  children: React.ReactNode;
  title: string;
  count: string;
  id: string;
  contentClasses?: string;
}

export const SectionContainer = (props: SectionContainerProps) => {
  const { children, title, count, id, contentClasses } = props;

  return (
    <div
      className={"bg-black d-flex justify-content-center align-items-center"}
      id={id}
    >
      <div className={`content ${contentClasses ?? ""}`}>
        <h1 className={"text-white  fw-bold mb-5"}>
          <span className={"text-highlight fs-4"}>{count}.</span> {title}
        </h1>
        {children}
      </div>
    </div>
  );
};
