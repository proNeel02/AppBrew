import React, { Children } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Categories from "./componetns/leftComponents/Categories";
import { Outlet, createBrowserRouter } from "react-router-dom";
import ProductsView from "./componetns/rightComponents/ProductsView";
import LoadCategory from "./componetns/Categories/LoadCategory";

const App = () => {
  return (
    <>
      <Container className="mt-4 text-center ms-0" fluid>
        <Row>
          <Col md={3}>
            <h5 className="mb-3">All Categories</h5>
            <Categories />
          </Col>

          <Col md={9}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

// using routing for Replacing <Outlet /> with corresponding category component
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductsView />,
      },
      {
        path: "/category/:categoryName",
        element: <LoadCategory />,
      },
    ],
  },
]);

export default appRouter;
