import React, { useRef } from "react";
import style from "./projects.module.css";
import { Row, Col } from "react-bootstrap";
import { CgArrowLongRight } from "react-icons/cg";

export const Projects = () => {
  return (
    <div className={style.projects} id="projects">
      <main className="content">
        <h1 className={style.title}>
          <span className={style.highlight + " fs-4"}>03.</span> Featured
          Projects
        </h1>
        <Row className={style.project_wrapper}>
          <Col
            md={6}
            className="d-flex align-items-center text-white order-2 order-md-1 order-lg-1 mt-4"
          >
            <div>
              <h3 className={style.subtitle}>Gooly: URL Shortener</h3>
              <p className={style.description}>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Etiam rhoncus euismod malesuada. In
                euismod est et felis egestas, a euismod velit lacinia. Praesent
                in dolor tincidunt, ultrices velit eget, semper eros. Morbi eu
                dignissim diam, quis dignissim erat. Aenean porta eros lectus,
                congue lacinia arcu porta a.
              </p>
              <ul className={style.list}>
                <li className={style.list_item + " small"}>React</li>
                <li className={style.list_item + " small"}>Express</li>
                <li className={style.list_item + " small"}>MongoDB</li>
              </ul>
              <button className={style.btn_naked}>
                Visit site &nbsp;
                <CgArrowLongRight fontSize={36} />
              </button>
            </div>
          </Col>
          <Col
            md={6}
            className={
              style.feature_img_wrapper + " order-1 order-md-2 order-lg-2 "
            }
          >
            <img src="/media/images/gooly.png" className={style.feature_img} />
          </Col>
        </Row>
        <Row className={style.project_wrapper}>
          <Col md={6} className={style.feature_img_wrapper}>
            <img src="/media/images/terra.jpg" className={style.feature_img} />
          </Col>
          <Col md={6} className="d-flex align-items-center mt-4">
            <div>
              <h3 className={style.subtitle}>Terra: Petition App</h3>
              <p className={style.description}>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Etiam rhoncus euismod malesuada. In
                euismod est et felis egestas, a euismod velit lacinia. Praesent
                in dolor tincidunt, ultrices velit eget, semper eros. Morbi eu
                dignissim diam, quis dignissim erat. Aenean porta eros lectus,
                congue lacinia arcu porta a.
              </p>
              <ul className={style.list}>
                <li className={style.list_item + " small"}>React</li>
                <li className={style.list_item + " small"}>Express</li>
                <li className={style.list_item + " small"}>MongoDB</li>
              </ul>
              <button className={style.btn_naked}>
                Visit site &nbsp;
                <CgArrowLongRight fontSize={36} />
              </button>
            </div>
          </Col>
        </Row>
        <Row className={style.project_wrapper}>
          <Col
            md={6}
            className="d-flex align-items-center text-white order-2 order-md-1 order-lg-1 mt-4"
          >
            <div>
              <h3 className={style.subtitle}>Gooly: URL Shortener</h3>
              <p className={style.description}>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Etiam rhoncus euismod malesuada. In
                euismod est et felis egestas, a euismod velit lacinia. Praesent
                in dolor tincidunt, ultrices velit eget, semper eros. Morbi eu
                dignissim diam, quis dignissim erat. Aenean porta eros lectus,
                congue lacinia arcu porta a.
              </p>
              <ul className={style.list}>
                <li className={style.list_item + " small"}>React</li>
                <li className={style.list_item + " small"}>Express</li>
                <li className={style.list_item + " small"}>MongoDB</li>
              </ul>
              <button className={style.btn_naked}>
                Visit site &nbsp;
                <CgArrowLongRight fontSize={36} />
              </button>
            </div>
          </Col>
          <Col
            md={6}
            className={
              style.feature_img_wrapper + " order-1 order-md-2 order-lg-2 "
            }
          >
            <img src="/media/images/gooly.png" className={style.feature_img} />
          </Col>
        </Row>
        {/**<Row xs={1} md={3} sm={2} className="g-5">
          <Col>
            <div>
              <div className={style.card_img_wrapper}>
                <div className={style.overlay}></div>
                <img src="/media/images/gooly.png" className={style.card_img} />
              </div>
              <h5 className={style.highlight + " fw-bold"}>
                Gooly: URL Shortener
              </h5>
              <p className={style.description}>
                FREE URL Shortener to shorten and beautify your long and messy
                links. Created with MongoDB, Express, React, & Node.js
              </p>
              <ul className={style.list}>
                <li className={style.list_item + " small"}>React</li>
                <li className={style.list_item + " small"}>Express</li>
                <li className={style.list_item + " small"}>MongoDB</li>
              </ul>
              <button className={style.btn_naked}>
                Visit site &nbsp;
                <CgArrowLongRight fontSize={36} />
              </button>
            </div>
          </Col>

          <Col>
            <div>
              <div className={style.card_img_wrapper}>
                <div className={style.overlay}></div>
                <img src="/media/images/terra.jpg" className={style.card_img} />
              </div>
              <h5 className={style.highlight + " fw-bold"}>
                Terra: Petition App UI/UX
              </h5>
              <p className={style.description}>
                A petition app that can create environmental change and expose
                companies that destroy nature. Created with Illustrator and
                Photoshop.
              </p>
              <ul className={style.list}>
                <li className={style.list_item + " small"}>Photoshop</li>
                <li className={style.list_item + " small"}>Illustrator</li>
              </ul>
              <button className={style.btn_naked}>
                Visit site &nbsp;
                <CgArrowLongRight fontSize={36} />
              </button>
            </div>
          </Col>

          <Col>
            <div>
              <div className={style.card_img_wrapper}>
                <div className={style.overlay}></div>
                <img src="/media/images/terra.jpg" className={style.card_img} />
              </div>
              <h5 className={style.highlight + " fw-bold"}>
                Terra: Petition App UI/UX
              </h5>
              <p className={style.description}>
                A petition app that can create environmental change and expose
                companies that destroy nature. Created with Illustrator and
                Photoshop.
              </p>
              <ul className={style.list}>
                <li className={style.list_item + " small"}>Photoshop</li>
                <li className={style.list_item + " small"}>Illustrator</li>
              </ul>
              <button className={style.btn_naked}>
                Visit site &nbsp;
                <CgArrowLongRight fontSize={36} />
              </button>
            </div>
          </Col>

          <Col>
            <div>
              <div className={style.card_img_wrapper}>
                <div className={style.overlay}></div>
                <img src="/media/images/terra.jpg" className={style.card_img} />
              </div>
              <h5 className={style.highlight + " fw-bold"}>
                Terra: Petition App UI/UX
              </h5>
              <p className={style.description}>
                A petition app that can create environmental change and expose
                companies that destroy nature. Created with Illustrator and
                Photoshop.
              </p>
              <ul className={style.list}>
                <li className={style.list_item + " small"}>Photoshop</li>
                <li className={style.list_item + " small"}>Illustrator</li>
              </ul>
              <button className={style.btn_naked}>
                Visit site &nbsp;
                <CgArrowLongRight fontSize={36} />
              </button>
            </div>
          </Col>

          <Col>
            <div>
              <div className={style.card_img_wrapper}>
                <div className={style.overlay}></div>
                <img src="/media/images/terra.jpg" className={style.card_img} />
              </div>
              <h5 className={style.highlight + " fw-bold"}>
                Terra: Petition App UI/UX
              </h5>
              <p className={style.description}>
                A petition app that can create environmental change and expose
                companies that destroy nature. Created with Illustrator and
                Photoshop.
              </p>
              <ul className={style.list}>
                <li className={style.list_item + " small"}>Photoshop</li>
                <li className={style.list_item + " small"}>Illustrator</li>
              </ul>
              <button className={style.btn_naked}>
                Visit site &nbsp;
                <CgArrowLongRight fontSize={36} />
              </button>
            </div>
          </Col>

          <Col>
            <div>
              <div className={style.card_img_wrapper}>
                <div className={style.overlay}></div>
                <img src="/media/images/terra.jpg" className={style.card_img} />
              </div>
              <h5 className={style.highlight + " fw-bold"}>
                Terra: Petition App UI/UX
              </h5>
              <p className={style.description}>
                A petition app that can create environmental change and expose
                companies that destroy nature. Created with Illustrator and
                Photoshop.
              </p>
              <ul className={style.list}>
                <li className={style.list_item + " small"}>Photoshop</li>
                <li className={style.list_item + " small"}>Illustrator</li>
              </ul>
              <button className={style.btn_naked}>
                Visit site &nbsp;
                <CgArrowLongRight fontSize={36} />
              </button>
            </div>
          </Col>
        </Row>*/}
      </main>
    </div>
  );
};
