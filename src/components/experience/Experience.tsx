import React from "react";
import { Row, Col } from "react-bootstrap";
import { SectionContainer } from "../section/SectionContainer";

import { Accordion } from "../accordion/Accordion";
import { AccordionItem } from "../accordion/AccordionItem";
import { AccordionBody } from "../accordion/AccordionBody";
import { ExperienceItem } from "./ExperienceItem";
import { Work } from "./types";
export const Experience = () => {
  const [active, setActive] = React.useState<number>(0);

  const works = [
    {
      company: "Reward Holdings Limited",
      title: "Frontend Developer",
      img: "/media/images/rhlogo.webp",
      duration: {
        start: 1659283200000,
        end: -1,
      },
      stack: ["React JS", "Node JS", "Wordpress", "Bootstrap", "MySQL"],
      responsiblities: [
        "Builds and maintains React apps and Wordpress custom themes.",
        "Server-side scripting using Node JS for third-party automations.",
        "Figure out legacy codebase and re-engineer to modern tech such as React.",
      ],
    },
    {
      company: "Freelance",
      title: "Frontend Developer | UI UX",
      img: null,
      duration: {
        start: 1627747200000,
        end: 1651334400000,
      },
      stack: ["React JS", "Adobe XD", "Illustrator", "Photoshop"],
      responsiblities: [
        "Frontend development using mainly React JS",
        "Web UI/UX Designing",
        "Logo Designing",
      ],
    },
  ];

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
          <Accordion>
            {works.map((work: Work, key) => (
              <AccordionItem
                key={key}
                active={active === key}
                title={work.company + " - " + work.title}
                onClick={() => setActive(key)}
              >
                <AccordionBody>
                  <ExperienceItem work={work} />
                </AccordionBody>
              </AccordionItem>
            ))}
          </Accordion>
        </Col>
      </Row>
    </SectionContainer>
  );
};
