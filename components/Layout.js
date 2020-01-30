import Head from "next/head";
import Navbar from "./NavigationBar.js";
import { Container } from "reactstrap";

const Layout = props => (
  <div>
    <Head>
      <title>SourceDiv</title>
    </Head>
    <Navbar />
    <Container>{props.children}</Container>
  </div>
);

export default Layout;
