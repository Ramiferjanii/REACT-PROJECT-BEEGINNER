import React from 'react'
import './Sidebar.css'
import Category from './Category/Category'
import Price from './Price/Price'
import Color from './Color/Color'

import { MdOutlineShoppingCart } from "react-icons/md";


function Sidebar() {
  return (
    <>
    <section className="sidebar">
        <div className="logo-container">
            <h1>  <MdOutlineShoppingCart /> </h1>
        </div>


    <Category/>
    <Price/>
    <Color/>


    
    </section>
    
    
    </>
  )
}

export default Sidebar
