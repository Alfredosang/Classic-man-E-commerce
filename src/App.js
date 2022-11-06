
import './App.css';
import Hompage from './components/pages/Hompage';
import { commerce } from './components/pages/Commerce/commerce'
import React, { useState, useEffect } from 'react'

function App() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState({});


    const fetchProduct = async () => {
        const { data } = await commerce.products.list()
        

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

    const emptyCart = async () =>{
        const data = await commerce.cart.empty();
        setCart(data);
    }

    const removeItem = async (productId) =>{
      const data = await commerce.cart.remove(productId);
      setCart(data)
    }

    const updateQty = async (productId,quantity) => {
      const data = commerce.cart.update(productId,{quantity});
      setCart(data);

    }



    useEffect(() => {
        fetchProduct()
        fetchCart()
    }, [])
    

  return (
    <div className="App">
      <Hompage
       product={product} 
       cart={cart} 
       addCartItem={addCartItem}
       fetchCart={fetchCart}
       emptyCart={emptyCart}
       removeItem={removeItem}
       updateQty={updateQty}

       />
      
    </div>
  );
}

export default App;
