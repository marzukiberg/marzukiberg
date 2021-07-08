import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";

const Contact = () => {
  const [state, setState] = useState({
    form: {},
  });
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container
      className="contact portfolio container d-flex align-items-center py-5 text-center"
      id="contact"
    >
      <div style={{ maxWidth: 540 }} className="mx-auto">
        <h4 className="montserrat text-center font-weight-bold mb-3">
          GET IN TOUCH
        </h4>
        <p className="poppins mb-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          at, non molestiae, sint porro eligendi dicta ducimus dolore recusandae
          incidunt eaque ipsam blanditiis tenetur, laborum error quidem! Culpa,
          eveniet similique.
        </p>
        <Row className="mb-3">
          <Col md="6">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="icon">
                <i class="fa fa-location-arrow" aria-hidden="true"></i>
              </div>
              <p className="poppins">Pekanbaru, Riau, Indonesia</p>
            </div>
          </Col>
          <Col md="6">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="icon">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <p className="poppins">marzukiberg@gmail.com</p>
            </div>
          </Col>
        </Row>

        <Form onSubmit={onSubmit}>
          <Row className="mb-3">
            <Col md="6">
              <FormControl
                className="app_input mb-3"
                placeholder="Name"
                required
              />
            </Col>
            <Col md="6">
              <FormControl
                className="app_input mb-3"
                type="email"
                placeholder="Email"
                required
              />
            </Col>
            <Col md="12">
              <FormControl
                as="textarea"
                rows={4}
                className="app_input mb-3"
                placeholder="Message"
                required
              />
            </Col>
            <Button
              className="app_button rounded-pill"
              variant="transparent"
              type="submit"
            >
              Send Message
            </Button>
          </Row>
        </Form>
      </div>
    </Container>
  );
};

export default Contact;
