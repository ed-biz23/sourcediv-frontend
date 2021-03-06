import { Row, Col } from "reactstrap";
import styled from "styled-components";

// Styling the bootstrap Col
const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 0 0 30px 0;
`;

// Styling the bootstrap Row
const StyledRow = styled(Row)`
  padding: 0 15% 0 15%;
`;

// Styling the img tag
const StyledImg = styled.img`
  max-width: 100%;
  max-height: 100%;

  @media (max-width: 760px) {
    max-width: 50%;
    max-height: 50%;
  }
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
