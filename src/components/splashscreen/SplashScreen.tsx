import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "./splash.module.css";
import { Loader } from "../loader/Loader";
import LoadingBar from "react-top-loading-bar";
export const SplashScreen = (props: any) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(props.count);
  }, [props.count]);

  return (
    <Container
      className={
        style.splash + " h-100 px-0 ps-0 " + (count > 96 ? style.hide : "")
      }
      fluid
    >
      <LoadingBar
        height={5}
        color="#FF8800"
        progress={count}
        onLoaderFinished={() => setCount(100)}
      />
      <Row className="mx-0 ms-0 h-100 ">
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <div className={style.loader_wrapper}>
            <img className={style.logo} src="/media/logos/lalogo.svg" />
            {/**<Loader /> */}
            <h6 className={style.logo_txt + " small"}>[larch]</h6>
            <h1 className={style.counter}>{count}%</h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
