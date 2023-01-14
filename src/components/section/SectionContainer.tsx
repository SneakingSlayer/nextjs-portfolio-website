import React from "react";
import style from "./section.module.css";
interface SectionContainerProps {
  children: React.ReactNode;
  title: string;
  count: string;
  id: string;
}

export const SectionContainer = (props: SectionContainerProps) => {
  const { children, title, count, id } = props;

  return (
    <div
      className={"bg-black d-flex justify-content-center align-items-center"}
      id={id}
    >
      <main className="content">
        <h1 className={"text-white  fw-bold"}>
          <span className={"text-highlight fs-4"}>{count}.</span> {title}
        </h1>
        {children}
      </main>
    </div>
  );
};
