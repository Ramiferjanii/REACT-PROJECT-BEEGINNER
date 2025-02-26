import { useState } from "react"
import '../style.css'; 
import {FaSearch} from 'react-icons/fa' 
const SearchIcon = () => {

    const [showInput, setShowInput] = useState(false) 
    const [bgColor , setBgColor ] = useState('white') 

     const handleClick = (e) => { 
        setBgColor("lightblue") 

        if (e.target.className === "container") { 
            setShowInput(false)
            setBgColor("white") 
        }
    }

return (

    <section className="container" style={{backgroundColor:bgColor }} onClick={handleClick} > 
    { showInput ? <input type="text" placeholder="Search..." /> : <FaSearch onClick={() => setShowInput(true)} /> }


    </section>
    
    
    
   
) 
}

export default SearchIcon
