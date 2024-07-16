import React from "react";
import Card from "react-bootstrap/Card";
import Button from "../Buttons";

const SingleProduct = ({ product }) => {
  return (
    <Card key={product.id} className="col-lg-3 col-md-4 col-8 mb-2">
      <Card.Img
        variant="top"
        src={product.image}
        className=" object-fit-contain p-4"
        height={200}
        width={200}
      />
      <Card.Body>
        <Card.Title className="ellipsis">{product.title}</Card.Title>
        <Card.Text className="text-center try">
          <span className="text-secondary fst-italic">$ {product.price}</span>
          <p className="text-secondary fs-6">{product.description}</p>
        </Card.Text>
      </Card.Body>
      <Button
        type={"sumbit"}
        text={"Buy"}
        className="custom-btn bg-primary text-white"
      />
    </Card>
  );
};

export default SingleProduct;
