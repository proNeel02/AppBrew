import { useEffect, useState } from "react";
import { All_PRODUCTS } from "../../utils/Constant";
import SingleCard from "./SingleCard";
import { Row, Col } from "react-bootstrap";
const ProductsView = () => {
  // state varible use for storing all data
  // initially it will be null
  const [allProducts, setAllProducts] = useState(null);

  // using use effect hook  to load the data once when the ProductView component is redered
  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = async () => {
    try {
      const response = await fetch(All_PRODUCTS);
      const data = await response.json();
      //   console.log(data);
      setAllProducts((prevProduct) => data?.products);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Row>
    <h4>{"All Products"}</h4>
      <Col md={12}>
        <Row className="text-center">
          {allProducts?.map((product) => {
            return <SingleCard key={product?.id} product={product}/>;
          })}
        </Row>
      </Col>
    </Row>
  );
};

export default ProductsView;
