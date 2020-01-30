import { Fragment } from "react";
import { Col } from "reactstrap";
import styled from "styled-components";

const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  max-width: 120px;
  min-height: 83px;
  margin: 10px;
`;

const Logos = () => (
  <Fragment>
    <Col lg="2" md="12">
      <img
        style={{
          maxHeight: "20%",
          maxWidth: "20%"
        }}
        src={"http://localhost:3000/logos/ownzones.svg"}
      ></img>
    </Col>
  </Fragment>
);

export default Logos;
