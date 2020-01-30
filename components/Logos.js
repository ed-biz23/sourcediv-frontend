import { Row, Col } from "reactstrap";
import styled from "styled-components";

const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding-bottom: 30px;
`;

const StyledRow = styled(Row)`
  margin: 0 20px 0 20px;
`;

const StyledImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Logos = () => (
  <StyledRow>
    <StyledCol lg="2" md="12">
      <StyledImg src="/logos/ownzones.svg" />
    </StyledCol>
    <StyledCol lg="2" md="12">
      <StyledImg src="/logos/portfoliobox.png" />
    </StyledCol>
    <StyledCol lg="2" md="12">
      <StyledImg src="/logos/waydev.svg" />
    </StyledCol>
    <StyledCol lg="2" md="12">
      <StyledImg src="/logos/colorelephant.svg" />
    </StyledCol>
    <StyledCol lg="2" md="12">
      <StyledImg src="/logos/mvpfactory.svg" />
    </StyledCol>
  </StyledRow>
);

export default Logos;
