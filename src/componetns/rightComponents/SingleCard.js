import { Button } from "react-bootstrap";
import { Card, Col, Row } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import { AiOutlineStar } from "react-icons/ai";
const SingleCard = (props) => {
  // desctructuring

  const { thumbnail, title, rating, price } = props.product;
  return (
    <Col md={4} sm={6} className="p-2">
      <Card className="border-0 shadow h-100">
        <Card.Img variant="top" src={thumbnail} />

        <Card.Body>
          <Card.Title style={{ fontSize: "15px" }}>{title}</Card.Title>
        </Card.Body>
        <Row>
          <Col>
            {/* className="d-flex justify-content-around" */}
            <Badge bg="success">
              <AiOutlineStar />
              <span>{rating}</span>
            </Badge>
          </Col>

          <Col>
            <h6>Price : {price}</h6>
          </Col>
          <Col>
            <Button size="sm" variant="warning">
              Add to cart
            </Button>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default SingleCard;
