import React from 'react'
import Footer from './footer/Footer'
import Hero from './hero/Hero'
import Product from './product/Product'

const Hompage = ({
  product,
  cart,addCartItem,
  fetchCart,
  emptyCart,
  removeItem,
  updateQty

}) => {
  return (
    <div>
        <Hero 
        cart={cart}
        emptyCart={emptyCart}
        removeItem={removeItem}
        updateQty={updateQty}
        fetchCart={fetchCart}/>

        <Product
         product={product} 
         addCartItem={addCartItem} />
         <Footer />
    </div>
  )
}

export default Hompage