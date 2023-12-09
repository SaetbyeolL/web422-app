
import React, { useState } from "react";

const ProductDetails = ({ product, onProductClick }) => {
  return (
    <div onClick={() => onProductClick(product)}>
      <table>
        <tr>
          <th style={{ width: "5%" }}>ID</th>
          <th style={{ width: "15%" }}>Title</th>
          <th style={{ width: "10%" }}>Price</th>
          <th style={{ width: "30%" }}>Description</th>
          <th style={{ width: "10%" }}>Category</th>
          <th style={{ width: "10%" }}>Rating</th>
          <th style={{ width: "10%" }}>Image</th>
        </tr>
        <tr>
          <td style={{ textAlign: "center" }}>{product.id}</td>
          <td style={{ textAlign: "center" }}>{product.title}</td>
          <td style={{ textAlign: "center" }}>${product.price}</td>
          <td style={{ textAlign: "center" }}>{product.description}</td>
          <td style={{ textAlign: "center" }}>{product.category}</td>
          <td style={{ textAlign: "center" }}>
            {product.rating.rate} ({product.rating.count} reviews)
          </td>
          <td style={{ textAlign: "center" }}>
            <img
              src={product.image}
              alt={product.title}
              height="100"
              width="100"
            />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ProductDetails;
