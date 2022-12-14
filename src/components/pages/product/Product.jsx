import React from 'react'
import './product.css'
import shoe from '../asset/pngegg.png'
import watch from '../asset/pngeg.png'

import { MdShoppingCart } from 'react-icons/md';


const Product = ({product,addCartItem}) => {
    

    


    return (
        <div>
            <div className='container mx-auto'>
                <div className='pt-7'>
                    <div className='flex flex-col items-center md:flex-row  md:space-x-7 py-10'>
                        <div className='theme shadow-sm shadow-black w-[370px] mb-3 md:w-[500px] hover:scale-105 duration-200 h-[150px] rounded-xl'></div>
                        <div className='theme shadow-sm shadow-black w-[370px] mb-3 md:w-[500px] hover:scale-105 duration-200 h-[150px] rounded-xl'></div>
                        <div className='theme shadow-sm shadow-black w-[370px] mb-3 md:w-[500px] hover:scale-105 duration-200 h-[150px] rounded-xl'></div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center md:p-10 justify-center'>
                        <div>
                            <h2 className='text-red-800 text-4xl font-medium md:w-[500px] mt-5'>Get the best quality you deserve...</h2>

                        </div>
                        <div>
                            <img src={shoe} className=' w-[500px] md:w-[700px]' alt='shoe pic'></img>
                        </div>
                    </div>
                    <div className='flex ml-32 mb-10'>
                        <h2 className='text-4xl font-bold text-red-800 '>Wears</h2>
                    </div>
                    <div className='flex flex-wrap gap-8 justify-center'>
                        {
                            product.map((product) => (
                                <div key={product.id} className='flex flex-col items-center theme w-[150px] h-[220px] md:w-[300px] md:h-[400px] md:shadow-xl'>
                                    {/* <h1 className='text-black'>hello</h1> */}
                                    <div>
                                        <img src={product.image.url} className='w-[150px] h-[150px] md:w-[300px] md:h-[300px] bg-white object-cover object-center' alt='product pic'></img>
                                    </div>
                                    <div className='flex md:flex-row items-center space-x-2 md:space-x-16 md:justify-between'>
                                        <div className='flex flex-col justify-start items-start pt-3'>
                                            <h2 className='themee md:font-bold md:text-xl'>{product.name.slice(0,10)}...</h2>
                                            <h2 className='text-gray-300 text-sm md:text-md '>{product.price.formatted_with_symbol}</h2>
                                        </div>
                                        <div>
                                            < MdShoppingCart size={30} onClick={()=>addCartItem(product.id,1)} className='themee md:hover:text-red-800' />
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                    </div>

                    <div className='flex flex-col md:flex-row items-center mt-32 justify-center'>
                        <div>
                            <img src={watch} className=' w-[200px] md:w-[300px] mb-10' alt='watch pic '></img>
                        </div>
                        <div>
                            <h2 className='text-red-800 text-3xl font-medium  md:w-[500px] mt-5'>Iconic, Spectacular and Fashionable...</h2>


                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Product