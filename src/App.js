
import './App.css';
import Hompage from './components/pages/Hompage';
import { commerce } from './components/pages/Commerce/commerce'
import React, { useState, useEffect } from 'react'

function App() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState({});
  // const [addToCart, setAddToCart] = useState([])

    const fetchProduct = async () => {
        const { data } = await commerce.products.list()
        // const data = await response.json();

        setProduct(data)
        console.log(data)
    }

    const fetchCart = async () =>{
      const response = await commerce.cart.retrieve()
      setCart(response)
      console.log(response);
    }

    const addCartItem = async (productId,number) => {

     const item = await commerce.cart.add(productId,number);
     setCart(item)



    }

    // const emptyCart = async () =>{
    //     const {data} = await commerce.cart.empty();
    //     setCart(data);
    // }

    useEffect(() => {
        fetchProduct()
        fetchCart()
        // emptyCart()
    }, [])
    // console.log(cart);

  return (
    <div className="App">
      <Hompage
       product={product} 
       cart={cart} 
       addCartItem={addCartItem}
       fetchCart={fetchCart} />
      
    </div>
  );
}

export default App;
