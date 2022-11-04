import React from 'react'
import './Hero.css'
import { MdShoppingCart } from 'react-icons/md';
import { ImBin } from 'react-icons/im';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa'

const Hero = ({ cart }) => {
  const [isOpen, setIsopen] = useState(false);







  // const toggle = () =>{
  //   setIsopen(true)
  // }


  return (
    <div>

      <div className='clip h-[100vh] md:m-5'>
        <div className='container mx-auto'>
          <nav className='flex justify-between pt-7'>
            <div className='text-white font-medium'>Classic Man</div>
            <div className='space-x-5'>
              <button className='text-white text-medium'>Lastest</button>
              <button className='text-white text-medium'>Lastest</button>
              <button className='text-white text-medium'>Lastest</button>
              <button className='text-white text-medium'>Lastest</button>
            </div>
            <div className='relative'>
              < MdShoppingCart size={35} onClick={() => setIsopen(!isOpen)} className='text-white hover:text-red-800' />
              <div className='text-white bg-red-800 w-7 h-7 flex justify-center items-center absolute rounded-full top-[-5px] right-[-15px]'>{cart.total_items}</div>
            </div>
          </nav>
          <div className='flex justify-center mt-[350px]'>
            <div className='w-[370px] md:w-[800px] h-[200px]'>
              <h1 className='themee text-5xl font-medium'>Your taste determines what you attract...  </h1>
            </div>

          </div>
          {/* <div className={`absolute w-[700px] h-[100vh] themeee z-30 ${isOpen? 'right-0': 'right-[-700px]'} top-0 duration-300 `}>
              <div><FaTimes onClick={()=>setIsopen(!isOpen)} size={35} className='text-red-900'/></div>
              <div> 
                {
                  cart.line_items?.map((product) => (
                    <div key={product.id} className='text-black'>
                    <div>
                      <img src={product.image.url} alt='cart product' className='w-[200px] h-[200px]' ></img>
                    </div>
                    <div>{product.name}</div>
                    </div>
                  ))
                }
              </div>

            </div> */}


        </div>


      </div>

      <div className={`absolute w-[550px] h-[110vh] shadow-xl overflow-y-scroll scroll-smooth scroll-hidden themeee z-30 ${isOpen ? 'right-0' : 'right-[-700px]'} top-0 duration-300 `}>
        <div ><FaTimes onClick={() => setIsopen(!isOpen)} size={35} className='text-red-900 ml-5 my-5 ' /></div>
        <div>
          {
            cart.line_items?.map((product) => (
              <div key={product.id} className='flex themee theme h-[200px] w-[500px] m-5 shadow-md'>
                <div>
                  <img src={product.image.url} alt='cart product' className='w-[200px] h-[200px] bg-white object-cover object-center ' ></img>
                </div>
                <div className='flex flex-col   justify-center space-y-7 w-[250px]'>

                  <div className=' flex flex-col  items-start justify-center ml-7'>
                    <h2 className='text-xl font-bold'>{product.name}</h2>
                    <h2>{product.price.formatted_with_symbol}</h2>
                  </div>
                  <div className='flex justify-between'>

                    <div className='flex space-x-5 ml-7'>
                      <button className='w-10 h-7 rounded-md bg-red-300/70'><h2 className='text-xl text-white text-bold'>+</h2></button>
                      <h2 className='class-white text-xl font-bold'>1</h2>
                      <button className='w-10 h-7 rounded-md bg-red-300/70'><h2 className='text-xl text-white text-bold'>-</h2></button>
                    </div>
                    <ImBin className='' size={25} />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className='space-y-7 theme pt-10'>
          <div className='w-[500px]'>
            <div className='flex justify-between mx-5'>
              <h1 className='text-2xl text-white '>Total Items :</h1>
              <h1 className='text-2xl text-white '>8</h1>
            </div>

          </div>

          <div className='w-[500px]'>
            <div className='flex justify-between mx-5'>
              <h1 className='text-2xl text-white '>Total Amount :</h1>
              <h1 className='text-2xl text-white '>N646,500</h1>
            </div>

          </div>


          <div className='flex justify-between mx-5 '>
            <button className='bg-red-600 text-2xl text-white font-meduim w-[200px] h-[70px] shadow-md mb-10 hover:bg-red-800'>Empty Cart</button>
            <button className='bg-green-600 text-2xl text-white font-meduim w-[200px] h-[70px] shadow-md mb-10 hover:bg-green-800'>Checkout</button>

          </div>

        </div>


      </div>

    </div>
  )
}

export default Hero