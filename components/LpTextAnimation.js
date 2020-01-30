import { Col, Row } from "reactstrap";
import styled from "styled-components";

import InputField from "./InputField";

const StyledCol = styled(Col)`
  display: flex;
  margin-left: 0px;
  justify-content: center;
  padding-left: 0px;
  padding-right: 0px;
  flex-direction: column;
`;

const StyledH2 = styled.h2`
  font-size: 36px;
  color: rgb(15, 27, 50);
  max-width: 600px;
  font-weight: 400;
  line-height: 42px;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-bottom: 20px;

  @media (max-width: 760px) {
    max-width: 350px;
    line-height: 32px;
    font-size: 32px;
    text-align: center;
  }
`;

const StyledAniSpan = styled.span`
  &:before {
    content: " know-how";
    color: red;
    animation: animate infinite 15s;
  }
  @keyframes animate {
    0% {
      content: " know-how";
      color: red;
    }
    11% {
      content: " product docs";
      color: blue;
    }
    22% {
      content: " best practices";
      color: green;
    }
    33% {
      content: " playboards";
      color: orange;
    }
    44% {
      content: " onboarding";
      color: yellow;
    }
    55% {
      content: " brainstorms";
      color: purple;
    }
    77% {
      content: " meeting notes";
      color: cyan;
    }
    88% {
      content: " documentation";
      color: navy;
    }
  }
`;

const StyledBr = styled.br`
  display: none;
  @media (max-width: 760px) {
    display: inline;
  }
`;

const LpTextAnimation = () => (
  <StyledCol lg="6" md="12">
    <StyledH2>
      {"your team's"}
      <StyledBr />
      <StyledAniSpan />
      <br />
      {"in a fast flexible workspace"}
      <br />
    </StyledH2>
    <InputField />
  </StyledCol>
);

export default LpTextAnimation;
