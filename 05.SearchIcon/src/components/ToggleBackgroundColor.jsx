import { useState } from "react"
import '../style.css';

const ToggleBackgroundColor = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    
    const handleClick = () => { 
        setIsDarkMode(!isDarkMode)
    }

    return (
        <div className="theme-container" 
             style={{ 
                backgroundColor: isDarkMode ? '#1b1b1b' : 'white',
                color: isDarkMode ? '#ffa31a' : '#1b1b1b'
             }}>
            <button 
                onClick={handleClick}
                className="theme-toggle"
                style={{ 
                    border: `2px solid ${isDarkMode ? '#ffa31a' : '#1b1b1b'}`,
                    color: isDarkMode ? '#ffa31a' : '#1b1b1b'
                }}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>

            <section className="content">
                <h1>Welcome To A <br />REAL WORLD...</h1>
            </section>
        </div>
    )
}

export default ToggleBackgroundColor