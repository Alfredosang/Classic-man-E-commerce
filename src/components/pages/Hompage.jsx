import React from 'react'
import Footer from './footer/Footer'
import Hero from './hero/Hero'
import Product from './product/Product'

const Hompage = ({product,cart,addCartItem,fetchCart}) => {
  return (
    <div>
        <Hero 
        cart={cart}
        fetchCart={fetchCart}/>
        <Product
         product={product} 
         addCartItem={addCartItem} />
         <Footer />
    </div>
  )
}

export default Hompage