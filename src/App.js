
import './App.css';
import Hompage from './components/pages/Hompage';
import { commerce } from './components/pages/Commerce/commerce'
import React, { useState, useEffect } from 'react'

function App() {
  const [product, setProduct] = useState([])
  const [cart, setCart] = useState([])
  const [addToCart, setAddToCart] = useState([])

    const fetchProduct = async () => {
        const { data } = await commerce.products.list()
        // const data = await response.json();

        setProduct(data)
    }

    const fetchCart = async () =>{
      const {data} = await commerce.cart.retrieve()
      setCart(data)
    }

    const addCartItem = async (productId,number) => {

     const {data} = await commerce.cart.add(productId, 1)
     setCart(...data,data)



    }

    useEffect(() => {
        fetchProduct()
        fetchCart()
    }, [])

  return (
    <div className="App">
      <Hompage product={product} />
      
    </div>
  );
}

export default App;
