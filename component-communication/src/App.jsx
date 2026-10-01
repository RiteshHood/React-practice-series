import { useState } from 'react'
import Product from './Components/Product'
import './App.css'
import SearchBar from './Components/SearchBar';
import ProductList from './Components/ProductList';

function App() {

  const [products ,setProducts]= useState([
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Phone", price: 25000 },
    { id: 3, name: "Headphones", price: 3000 }
  ]);

  const [search , setSearch] = useState("");

  const handleDelet = (id)=>{
    setProducts(
      products.filter(product=>product.id!=id)
    )
  }


  return (
    <>
      {/* <div className="container">
        {products.map((product) => {
          return(
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            handleDelet={handleDelet}
          />
          )
        })}
      </div> */}
      <SearchBar search={search} setSearch={setSearch}/>
      <ProductList search={search} productList={products} />
    </>
  )
}

export default App
