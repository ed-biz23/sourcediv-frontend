import Head from "next/head";
import Navbar from "./NavigationBar.js";
import { Container } from "reactstrap";
import styled from "styled-components";

// Styling the body tag
const StyledDiv = styled.div`
  font-family: "Ubuntu", sans-serif;
`;

const Layout = props => (
  <div>
    <Head>
      <title>SourceDiv</title>
      <link
        href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <StyledDiv>
      <Navbar />
      <Container>{props.children}</Container>
    </StyledDiv>
  </div>
);

export default Layout;
