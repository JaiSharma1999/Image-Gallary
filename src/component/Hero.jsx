import React, { useState } from 'react'
import { ProductsData } from './menu'
import Image from 'next/image'
import App from './Theme'



function Hero() {
  
  const [inputText, setInput] = useState("")
  const [MenuProduct, setMenuProduct] = useState(ProductsData)
  const filter = (type) => {
    setMenuProduct(ProductsData.filter((Product) => (Product.type === type)))
  }
  const inputHandler = (e) => {
    setInput(e.target.value.Product)
  }
  return (
    <div>
      
      <div className="mb-5 ms-10">
              <label for="exampleInputEmail1" className="form-label pe-5 font-bold ">Search Bar</label>
              <input type="email" className="form-control mb-5 px-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="search..." onChange={inputHandler} />

            </div>
      <div className=''>
        <ul className='flex flex-row justify-around mt-10 mb-10'>
          <li onClick={() => setMenuProduct(ProductsData)} className='text-rose-700 cursor-pointert font-bold hover:text-violet-600 hover:cursor-pointer border-2 rounded-lg p-2 hover:bg-white'>All Image</li>
          
          <li onClick={() => filter("conditioner")} className='text-slate-600 cursor-pointer font-bold hover:text-violet-600 hover:cursor-pointer border-2 rounded-lg p-2 hover:bg-white'>Conditioners Image</li>
          <li onClick={() => filter("skin care")} className='text-slate-600 cursor-pointer font-bold hover:text-violet-600 hover:cursor-pointer border-2 rounded-lg p-2 hover:bg-white'>Skin Care Image</li>
          <li onClick={() => filter("foundation")} className='text-slate-600 cursor-pointer font-bold hover:text-violet-600 hover:cursor-pointer border-2 rounded-lg p-2 hover:bg-white '>Foundation Image</li>

        </ul>
      </div>
      <div className='border-2 lg:flex lg:flex-wrap rounded-lg'>
        {MenuProduct.map((Product, index) => (
          <div key={index} className='border-4 m-20 p-5 text-xl font-bold lg:flex lg:flex-col  lg:w-48  rounded-lg '>
           
            <div className="text-center lg:flex text-pink-500">
            <span>{Product.name}</span>
             </div>
            <div className="">
                <Image src={Product.img} alt="" width={50} height={50} className='ms-16 mt-5' />
              </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Hero
