import React from "react";
import "semantic-ui-css/semantic.css";
import {
  Container,
  Header,
  Form,
  Input,
  TextArea,
  Button,
} from "semantic-ui-react";
import Nav from "../components/Nav";

const ContactPage = () => {
  const initialForm = {
    name: "",
    email: "",
    message: "",
  };

  return (
    <React.Fragment>
      <br></br>
      <Container>
        <Nav></Nav>
        <Header as="h1">Contact Us!</Header>
        <Form>
          <Form.Field
            control={Input}
            label="Full Name"
            placeholder="Enter your full name..."
          ></Form.Field>
          <Form.Field
            control={Input}
            label="Contact Email"
            placeholder="Enter the best email to contact you with..."
          ></Form.Field>
          <Form.TextArea
            label="Message"
            placeholder="Enter your message..."
          ></Form.TextArea>
          <Button color="green">Send Message</Button>
        </Form>
      </Container>
    </React.Fragment>
  );
};

export default ContactPage;
