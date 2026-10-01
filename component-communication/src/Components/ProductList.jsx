import React from 'react'
import Product from './Product'

const ProductList = ({ handleDelet , search ,productList}) => {

    const filteredProducts = productList.filter((product=>{
        return(
            product.name.toLowerCase().includes(search.toLowerCase())
        )
    }))

  return (
    <div className='product-list'>
       {filteredProducts.map(product => (
                <Product
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    handleDelet={handleDelet}
                />
            ))}
    </div>
  )
}

export default ProductList
