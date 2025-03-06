import React from 'react'
import { IoStarSharp } from "react-icons/io5";
import { BsBagFill } from "react-icons/bs";

function Card() {
  return (
   
      <section className="card">
            <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" className='card-img' alt="shoe" />
            <div className="card-details">
                <h3 className="card-title">shoe</h3>
                <section className="card-reviews"><IoStarSharp className='ratings-start' /><IoStarSharp className='ratings-start' /><IoStarSharp className='ratings-start' /><IoStarSharp className='ratings-start' />
                <span className="total-reviews">4</span>
                
                </section>
                <section className="card-price">
                    <div className="price">
                        <del>$300</del> $200
                    </div>

                    <div className="bag"><BsBagFill className='bag-icon' /></div>
                </section>
            </div>
        </section>
    
  )
}

export default Card
