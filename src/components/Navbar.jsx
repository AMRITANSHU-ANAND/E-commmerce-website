import React, { useContext } from 'react'
import { MyShop } from '../context/MyWebsite'

const Navbar = () => {

 let{setIsCartOpen} = useContext(MyShop);

  return (
    <nav className="bg-black rounded flex justify-between items-center px-4 py-3 text-amber-50">
      <div className="font-bold">
        MyStore
      </div>

      <div className="flex gap-4">
        <p onClick={()=>setIsCartOpen(true)}>Home</p>
        <p onClick={()=>setIsCartOpen(false)} >Cart</p>
        
      </div>

      <button  className="bg-amber-300 text-black px-4 py-2 rounded">
        Cart
      </button>
    </nav>
  )
}

export default Navbar
