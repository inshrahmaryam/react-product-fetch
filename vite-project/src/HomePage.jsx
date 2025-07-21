// HomePage.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SfNav from './SfNav';
import 'bootstrap/dist/css/bootstrap.min.css';

const BASE_URL = 'https://fakestoreapi.com/products';

function HomePage() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [page]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong!</div>;

  // ✅ Move this outside the return:
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <nav className="navbar bg-light px-4">
  <a className="navbar-brand" href="/">Products</a>
  <form className="d-flex ms-auto" onSubmit={(e) => e.preventDefault()}>
    <input
      type="text"
      className="form-control me-2"
      placeholder="Search products..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <button className="btn btn-outline-primary" type="submit">
      Search
    </button>
  </form>
</nav>


      <div className="container mt-4">
      
        <div className="row">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100 text-center p-2">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: '200px', objectFit: 'contain' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <Link to={`/products/${product.id}`}>
                    <button className="btn btn-primary">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
