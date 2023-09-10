import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Search(props) {
  return (
    <Navbar className="ms-5 ps-5  ">
      <Container style={{ margin: "auto 0" }}>
        <Navbar.Brand href="/" className="text-white">
          Punk-API-App
        </Navbar.Brand>

        <Form inline className="me-5">
          <Row>
            <Col xs="15">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                onChange={(e) => {
                  props.function(e);
                }}
              />
            </Col>
          </Row>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Search;
