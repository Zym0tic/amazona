import Data from './data';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <a href="/">amazona</a>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
        </Routes>
        <h1>Featured Products</h1>
        <div className="products">
          {Data.products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
              <a href={`/product/${product.slug}`}>
                <p>{product.name}</p>
                </a>
                <p><strong>${product.price}</strong></p>
                <button>add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
