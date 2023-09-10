import Card from "react-bootstrap/Card";

function Cards(props) {
  const click = () => {
    props.function(props.beer);
  };
  return (
    <Card
      className="mt-3 text-center bg-body-tertiary"
      border="dark"
      style={{ opacity: "50", color: "white" }}
    >
      <Card.Img
        className="mb-1 mt-2 ps-4 pe-4"
        variant="top"
        src={`${props.beer.image_url}`}
        height={350}
        width={80}
        bg="dark"
      />
      <Card.Body className="bg-success p-2 text-dark bg-opacity-25 mt-1">
        <Card.Title>{props.beer.name}</Card.Title>
        <Card.Text>{props.beer.tagline}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-center" style={{ textAlign: "center" }}>
        <div className="mt-1   text-center">
          {" "}
          <a onClick={click} className="btn btn-primary  col-lg-8">
            More Details
          </a>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default Cards;
