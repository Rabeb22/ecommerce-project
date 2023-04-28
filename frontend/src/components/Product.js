import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import '../styles/product.css';

const Product = ({ product }) => {
  return (
    // <Card className=" card">
    //   <Link to={`/product/${product._id}`}>
    //     <Card.Img
    //       loading="lazy"
    //       className=" card-img"
    //       src={product.image}
    //       variant="top"
    //       alt={product.name}
    //     />
    //   </Link>

    //   <Card.Body>
    //     <Link
    //       to={`/product/${product._id}`}
    //       style={{ color: 'dimgray', textDecoration: 'none' }}
    //     >
    //       <Card.Title className="product-title" as="p">
    //         <strong>{product.name}</strong>
    //       </Card.Title>
    //     </Link>

    //     <Card.Text as="div">
    //       {product && product.rating && (
    //         <Rating
    //           value={product.rating}
    //           text={`${product.numReviews} Review${
    //             product.numReviews > 1 ? 's' : ''
    //           }`}
    //         />
    //       )}
    //     </Card.Text>

    //     <Card.Text as="h4">
    //   {product.price &&
    //     product.price.toLocaleString('en-IN', {
    //       maximumFractionDigits: 2,
    //       style: 'currency',
    //       currency: 'INR',
    //     })}
    //     </Card.Text>
    //   </Card.Body>
    // </Card>

    <div className="card">
      <div className="card-content">
        <img src={product.image} alt="" className="card-img" />
        <h1 className="card-title">{product.name}</h1>
        <div className="card-body">
          <div className="card-star">
            {product && product.rating && (
              <Rating
                value={product.rating}
                text={`${product.numReviews} Review${
                  product.numReviews > 1 ? 's' : ''
                }`}
              />
            )}
          </div>
          <p className="card-price">
            {product.price &&
              product.price.toLocaleString('en-IN', {
                maximumFractionDigits: 2,
                style: 'currency',
                currency: 'INR',
              })}
          </p>
        </div>
        <div className="card-footer">
          <Link to={`/product/${product._id}`}>
            <button className="btn btn-success">Details</button>
          </Link>
          <Link to={`/cart/${product._id}`}>
            <button className="btn btn-border">Add To Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
