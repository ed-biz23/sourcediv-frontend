import { Col } from "reactstrap";
import styled from "styled-components";

const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 100;
  text-align: right;
  flex: 1 1 0%;

  @media (max-width: 760px) {
    padding-top: 60px;
    padding-bottom: 50px;
    justify-content: center;
  }
`;

const StyledH1 = styled.h1`
  font-size: 80px;
  color: rgb(15, 27, 50);
  max-width: 600px;
  font-weight: 700;
  margin-top: 0px;
  margin-bottom: 0px;
  line-height: 92px;
  letter-spacing: 3px;

  @media (max-width: 760px) {
    font-size: 60px;
    letter-spacing: 0px;
    line-height: 60px;
    text-align: center;
  }
`;

const LpTopText = () => (
  <StyledCol lg="6" md="12">
    <StyledH1>
      {"build grow "}
      <br />
      {" scale win"}
    </StyledH1>
  </StyledCol>
);

export default LpTopText;
