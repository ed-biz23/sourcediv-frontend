import Layout from "../components/Layout";
import { Row, Col } from "reactstrap";
import styled from "styled-components";

import LpTopText from "../components/LpTopText";
import LpTextAnimation from "../components/LpTextAnimation";
import Logos from "../components/Logos";

const StyledRow = styled(Row)`
  max-width: 1200px;
  width: 100%;
  margin: 0px;
  padding-bottom: 60px;
  padding-top: 0px;

  @media (max-width: 760px) {
    padding-bottom: 100px;
  }
`;

const StyledVl = styled(Col)`
  width: 1px;
  max-width: 1px;
  background-color: rgba(201, 201, 201, 0.59);
  margin-left: 30px;
  margin-right: 30px;
  padding: 0px;
  @media (max-width: 760px) {
    display: none;
  }
`;

const StyledDiv = styled.div`
  width: 100%;
  padding-top: 200px;
  padding-bottom: 80px;

  @media (max-width: 760px) {
    padding-top: 100px;
  }
`;

const Home = () => (
  <Layout>
    <StyledDiv>
      <StyledRow>
        <LpTopText />
        <StyledVl lg="1" />
        <LpTextAnimation />
      </StyledRow>
      <Logos />
    </StyledDiv>
  </Layout>
);

export default Home;
