import '../style.css'
import { useState } from 'react';

const TestMonials = () => {

    const [currentIndex , setCurrentIndex] = useState(0) 

    const testMonials = [
        {
          quote: "This is the best product I've ever used!",
          author: "Jane Doe",
        },
        {
          quote: "I highly recommend this product to everyone!",
          author: "John Smith",
        },
        {
          quote: "This product has completely changed my life!",
          author: "Bob Johnson",
        },
      ]; 


    const handlePrevClick = () => {
        setCurrentIndex((currentIndex + testMonials.length - 1) % testMonials.length)
    } 
    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % testMonials.length)
    }   



  return (

    <div className="testimonials">
        <div className="testimonials-quote">
            {testMonials[currentIndex].quote} 
            
        </div>



        <div className="testimonials-author">
            {testMonials[currentIndex].author}
        </div>



        <button onClick={handlePrevClick} >
            Prev
        </button>
            
            <button onClick={handleNextClick} > 
                Next
            </button>
    </div>
  )
}

export default TestMonials
