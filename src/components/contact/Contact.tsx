import React from "react";
import style from "./contact.module.css";
import { Row, Col, Form } from "react-bootstrap";
import { FaHome, FaPhone, FaEnvelopeOpen } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
export const Contact = () => {
  return (
    <div className={style.contact} id="contact">
      <video loop muted autoPlay controls="" className={style.bg}>
        <source src="/media/videos/bg.mp4" type="video/mp4" />
      </video>
      <main className={"content " + style.contact_content}>
        <h1 className={style.title}>
          <span className={style.highlight + " fs-4"}>04.</span> Contact
        </h1>

        <Row>
          <Col md={6} className={style.contact_left}>
            <div>
              <div className={style.contact_title}>
                <h2 className={style.subtitle + " mb-0"}>Get In Touch!</h2>
                <p className={style.contact_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer bibendum ac orci volutpat tempus.
                </p>
              </div>
              <div>
                <div className="d-flex align-items-center mb-3">
                  <FaHome fontSize={28} className={style.contact_icon} />
                  <p className={style.contact_info}>Davao City, Philippines</p>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <FaEnvelopeOpen
                    fontSize={24}
                    className={style.contact_icon}
                  />
                  <p className={style.contact_info}>endayalance@yahoo.com</p>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <FaPhone fontSize={24} className={style.contact_icon} />
                  <p className={style.contact_info}>+639770057069</p>
                </div>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label className={style.contact_label}>
                  Full name
                </Form.Label>
                <Form.Control
                  className={style.contact_input}
                  type="password"
                  placeholder="Enter full name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className={style.contact_label}>
                  Email address
                </Form.Label>
                <Form.Control
                  className={style.contact_input}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className={style.contact_label}>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  className={style.contact_input}
                  placeholder="Enter message"
                  rows={6}
                />
              </Form.Group>
              <button className={style.contact_btn}>Submit</button>
            </Form>
          </Col>
        </Row>
        <video className={style.video}>
          <source src="/media/videos/bg.m4v" type="video/mp4" />
        </video>
      </main>
    </div>
  );
};
