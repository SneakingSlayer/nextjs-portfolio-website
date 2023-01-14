import React from "react";
import { Row, Col } from "react-bootstrap";
import { SectionContainer } from "../section/SectionContainer";
import style from "./experience.module.css";
import { FaCode } from "react-icons/fa";

export const Experience = () => {
  const [containerHeight, setContainerHeight] = React.useState(0);
  const [lastChildHeight, setLastChildHeight] = React.useState(0);
  const [firstChildHeight, setFirstChildHeight] = React.useState(0);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const firstChildRef = React.useRef<HTMLDivElement>(null);
  const lastChildRef = React.useRef<HTMLDivElement>(null);

  const handleResize = React.useCallback(() => {
    setContainerHeight(containerRef.current?.clientHeight || 0);
    setFirstChildHeight(firstChildRef.current?.clientHeight || 0);
    setLastChildHeight(lastChildRef.current?.clientHeight || 0);
  }, [containerRef, firstChildRef, lastChildRef]);

  React.useLayoutEffect(() => {
    handleResize();
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("load", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, [containerRef, firstChildRef, lastChildRef, handleResize]);

  const lineHeight = containerHeight - lastChildHeight - 24;
  const topPosition = firstChildHeight / 2;
  return (
    <SectionContainer
      title="Where I worked"
      count="03"
      id="experience"
      contentClasses="pb-0 pb-lg-5"
    >
      <Row>
        <Col lg={6} md={12} className="d-flex align-items-center">
          <div>
            <h3 className="text-highlight fw-bold">
              Developer career timeline
            </h3>
            <p className="text-muted-le">
              I have spent most of my career developing in Javascript and
              building systems around it. I have experience working in small and
              medium companies during my time in the industry.
            </p>
          </div>
        </Col>
        <Col lg={6} md={12} className="pt-4 pt-lg-0">
          <div className={style.timeline_wrapper} ref={containerRef}>
            <div
              className={style.timeline_left}
              style={{ top: `${topPosition}px` }}
            >
              <div
                className={style.timeline_line}
                style={{
                  height: `${lineHeight}px`,
                }}
              ></div>
            </div>

            <div className={style.timeline_right}>
              <div
                className={style.card + " bg-highlight d-flex"}
                ref={firstChildRef}
              >
                <div className={style.img_wrapper}>
                  <img src="/media/images/rhlogo.webp" alt="" />
                </div>
                <div>
                  <h4 className="mb-0 fw-bold">Frontend Developer</h4>
                  <p className="mb-0 fw-bold ">Reward Holdings Full-time</p>
                  <p className="mb-0 small "> Aug 2022 - Present, 6 months</p>
                </div>
              </div>

              <div
                className={style.card + " d-flex border border-dark"}
                ref={lastChildRef}
              >
                <div className={style.img_wrapper}>
                  <FaCode fontSize={50} className="me-1" />
                </div>
                <div>
                  <h4 className="mb-0 fw-bold">Frontend Developer</h4>
                  <p className="mb-0 fw-bold ">Freelancer Part-time</p>
                  <p className="mb-0 small "> Nov 2021 - May 2022, 6 months</p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </SectionContainer>
  );
};
