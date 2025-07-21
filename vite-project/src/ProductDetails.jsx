import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchProduct();
  }, [id]);

  if (error) return <div>Something went wrong.</div>;
  if (!product) return <div>Loading...</div>;

  return (
    <>
   <div>
      <h2>{product.title}</h2>
      <img src={product.image} width="150" />
      
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
    </div>
   
    </>
  );
}

export default ProductDetails;
