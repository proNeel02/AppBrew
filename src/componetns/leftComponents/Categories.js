import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { CATEGORY_URL, FETCHING_SPECIFIC_CATEGORY } from "../../utils/Constant";

import { Link } from "react-router-dom";
const Categories = () => {
  // using state varible holding all the categories
  // initial it will be null
  const [categoryList, setCategoryList] = useState(null);

  // we are using use effect to load category list from the server
  useEffect(() => {
    loadAllCategories();
  }, []);

  // here we are using using async await to fetch data
  // and to handle err we are using try {} catch(){}
  const loadAllCategories = async () => {
    try {
      const response = await fetch(CATEGORY_URL);
      const data = await response.json();
      setCategoryList((prevData) => data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="text-center">
      {categoryList?.map((singleCategory, index) => {
        {/* console.log(singleCategory) */}
        return (
          <Card
            key={index}
            className="shadow my-2"
            style={{
              cursor: "pointer",
              textDecoration:"none"
            }}
          
            as={Link}
            to={"/category/"+singleCategory}
          >
            <Card.Body>
              <b>{singleCategory}</b>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};

export default Categories;
