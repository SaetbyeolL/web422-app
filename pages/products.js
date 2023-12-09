
import Link from 'next/link';
import { useState } from "react";
import ProductBox from '@/components/ProductBox'; 

export async function getStaticProps() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();

  return { props: { products: data } };
}

const Index = (props) => {
  const [modal, setModal] = useState(null); // State for the modal

  function addToCart(product){
    setCartList([...cartList, product]);
  }



  return (
    <section className="productSection">
      {modal && (
        <div className="modalContainer">
          <div className="modalBackground"></div>
          <div className="modal">
            <h1>{modal.title}</h1>
            <p>productId: {modal.id}</p>
            <p>Price: ${modal.price}</p>
            <p>Description: {modal.description}</p>
            <p>Category: {modal.category}</p>
            <p>Rating: {modal.rating.rate}</p>
            <img src={modal.image} width="100" height="100" alt="" /><br />
            <button onClick={() => setModal(null)}>Close</button> <br />
            <Link href={`/products/${modal.id}`}><button>View Details</button></Link>  <br />
            <button>Add to Cart</button>
          </div>
        </div>
      )}

      <table className="productTable">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
            <hr></hr>
          </tr>
        </thead>
        <tbody>
          {props.products.map((item) => (
            <tr
              key={item.id}
              onClick={() => setModal(item)} // Set the clicked item as the modal content
            >
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>{item.description}</td>
              <td><img src={item.image} width="100" height="100" alt="" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Index;
