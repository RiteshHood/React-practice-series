import React from 'react'

const Product = ({ id, name, price , handleDelet}) => {
    return (
        <div className='product-List'>
            <h2>Product-id : {id}</h2>
            <h3>Product : {name}</h3>
            <h3>Price : {price}</h3>
            <button onClick={()=>{handleDelet(id)}}>Delete</button>
        </div>
    )
}

export default Product
