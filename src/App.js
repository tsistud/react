import {useState, useEffect} from "react";
import {Productcard} from "./components/Productcard";

function App() {
  const[loading, setLoading] = useState(true);
  const[products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res)=>res.json())
      .then((json)=>setProducts(json))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading && <div>Loading...</div>}
      <div className="product-grid">
      {
        products.map((product) => (
          <Productcard data={product} />
        ))
      }
      </div>
    </div>
  );
}

export default App;



