import React from 'react'
import Hero from './hero/Hero'
import Product from './product/Product'

const Hompage = ({product}) => {
  return (
    <div>
        <Hero product={product}/>
        <Product product={product} />
    </div>
  )
}

export default Hompage