import React from "react";
import { Pill } from "../pill/Pill";
import { PillGroup } from "../pill/PillGroup";
import style from "./experience.module.css";
import moment from "moment";
import { FaCode } from "react-icons/fa";
import { Work } from "./types";

interface ExpItemProps {
  work: Work;
}

export const ExperienceItem = (props: ExpItemProps) => {
  const { work } = props;
  const handleDuration = () => {
    const hasEnd = work.duration.end > 0;
    const end = hasEnd
      ? moment(work.duration.end).format("MMMM YYYY")
      : "Present";
    const start = moment(work.duration.start).format("MMMM YYYY");
    const today = new Date();
    const duration = Math.abs(
      parseFloat(
        moment(work.duration.start)
          .diff(hasEnd ? work.duration.end : today, "months", true)
          .toFixed(0)
      )
    );
    return `${start} to ${end} - ${duration} months`;
  };
  return (
    <div>
      <div className="d-flex">
        <div className={style.img_wrapper}>
          {work.img ? (
            <img src={`${work.img}`} alt="rh-logo" />
          ) : (
            <FaCode className="text-highlight" fontSize={50} />
          )}
        </div>
        <div>
          <h5 className="mb-0 text-highlight fw-bold">{work.company}</h5>
          <p className="mb-0 text-white small text-muted-le">
            {handleDuration()}
          </p>
        </div>
      </div>
      <PillGroup>
        {work.stack.map((stack: string, key: number) => (
          <Pill key={key} title={stack} />
        ))}
      </PillGroup>
      <ul className="mb-0">
        {work.responsiblities.map((res: string, key: number) => (
          <li key={key} className="text-white small text-muted-le">
            {res}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
