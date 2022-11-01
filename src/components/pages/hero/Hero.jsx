import React from 'react'
import './Hero.css'
import { MdShoppingCart } from 'react-icons/md';

const Hero = () => {
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
              < MdShoppingCart size={35} className='text-white hover:text-red-800' />
              <div className='text-white bg-red-800 w-5 h-5 flex justify-center items-center absolute rounded-full top-[-5px] right-[-10px]'>6</div>
              </div>
            </nav>
            <div className='flex justify-center mt-[350px]'>
              <div className='w-[370px] md:w-[800px] h-[200px]'>
                <h1 className='themee text-5xl font-medium'>Your taste determines what you attract...  </h1>
              </div>
              {/* <div className='w-[500px] h-[300px]'>
              
              </div> */}
            </div>


          </div>
          

        </div>
    </div>
  )
}

export default Hero