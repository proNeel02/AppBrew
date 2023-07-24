import { Row, Col } from "react-bootstrap";
import SingleCard from "../rightComponents/SingleCard";
import useloadingAllCatProducts from "../../CustomHooks/useloadingAllCatProducts";
const LoadCategory = () => {
  const [data, category] = useloadingAllCatProducts();

  console.log(data);
  return (
    <Row>
      <h4>{category}</h4>
      <Col md={12}>
        <Row className="text-center">
          {data?.map((product) => {
            return <SingleCard key={product?.id} product={product} />;
          })}
        </Row>
      </Col>
    </Row>
  );
};

export default LoadCategory;
