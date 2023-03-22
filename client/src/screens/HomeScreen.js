import React from 'react'
import Data from '../data'

function HomeScreen() {
  return (
    <div>
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
    </div>
  )
}

export default HomeScreen;
