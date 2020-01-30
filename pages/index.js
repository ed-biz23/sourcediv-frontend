import Layout from "../components/Layout";
import { Row, Col } from "reactstrap";
import styled from "styled-components";

import LpTopText from "../components/LpTopText";
import LpTextAnimation from "../components/LpTextAnimation";

const StyledRow = styled(Row)`
  justify-content: center;
  align-items: center;
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

const StyledDiv1 = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-top: 200px;
  padding-bottom: 80px;

  @media (max-width: 760px) {
    padding-top: 100px;
  }
`;

const StyledDiv2 = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  padding-bottom: 60px;

  @media (max-width: 760px) {
    align-items: center;
    flex-direction: column;
    padding-bottom: 100px;
  }
`;

const Home = () => (
  <Layout>
    <StyledRow>
      <StyledDiv1>
        <StyledDiv2>
          <LpTopText />
          <StyledVl lg="2" />
          <LpTextAnimation />
        </StyledDiv2>
      </StyledDiv1>
    </StyledRow>
  </Layout>
);

export default Home;
