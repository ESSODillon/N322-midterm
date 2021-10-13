import React from "react";
import "semantic-ui-css/semantic.css";
import { Header, Container, Segment, Button } from "semantic-ui-react";
import Nav from "../components/Nav";

const HomePage = () => {
  return (
    <React.Fragment>
      <br></br>
      <Container>
        <Nav></Nav>
        <Segment textAlign="center">
          <Header as="h1">Home</Header>
          <p>Some random text you can ignore</p>
          <Button color="green">Join Now!</Button>
        </Segment>
        <Header>News</Header>
        <p>Some more random text</p>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
