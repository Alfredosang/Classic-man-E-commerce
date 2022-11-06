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
                    <div className='flex flex-row items-center md:p-10 justify-center'>
                        <div>
                            <h2 className='text-red-800 text-4xl font-medium w-[500px] mt-5'>Get the best quality you deserve...</h2>

                        </div>
                        <div>
                            <img src={shoe} className='w-[700px]' alt='shoe pic'></img>
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-8 justify-center'>
                        {
                            product.map((product) => (
                                <div key={product.id} className='flex flex-col items-center theme w-[300px] h-[400px] shadow-xl'>
                                    {/* <h1 className='text-black'>hello</h1> */}
                                    <div>
                                        <img src={product.image.url} className='w-[300px] h-[300px] bg-white object-cover object-center' alt='product pic'></img>
                                    </div>
                                    <div className='flex flex-row items-center space-x-16 justify-between'>
                                        <div className='flex flex-col justify-start items-start pt-3'>
                                            <h2 className='themee font-bold text-xl'>{product.name}</h2>
                                            <h2 className='text-gray-300 '>{product.price.formatted_with_symbol}</h2>
                                        </div>
                                        <div>
                                            < MdShoppingCart size={30} onClick={()=>addCartItem(product.id,1)} className='themee hover:text-red-800' />
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                    </div>

                    <div className='flex flex-row items-center md:mt-32 justify-center'>
                        <div>
                            <img src={watch} className='w-[300px]' alt='watch pic'></img>
                        </div>
                        <div>
                            <h2 className='text-red-800 text-4xl font-medium w-[500px] mt-5'>Iconic, Spectacular and Fashionable...</h2>


                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Product