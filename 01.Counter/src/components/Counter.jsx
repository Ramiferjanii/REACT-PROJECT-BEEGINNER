import { useState } from "react" 
import '../style.css';
const Counter = () => {

    const [count, setCount] = useState(0) ; 
    

    const increment = () => {
      setCount(count + 1) ; 
    }
    const decrement = () => {
      setCount(count - 1) ; 
    }







  return (
    <div className="container"> 
      <div>
        <h1 className="number" > {count} </h1> 
        </div>



      <div className="btns-container" >
        <buttom onClick = {increment}  className="increment" >+</buttom>
        <buttom onClick = {decrement}  className="increment" >-</buttom>
      </div>
    </div>
  )
}

export default Counter
