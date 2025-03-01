import { useState } from "react"
import PropTypes from 'prop-types';
import '../style.css' 

const Accordions = ({ title, content }) => {  // Destructure props correctly
    const [isActive, setIsActive] = useState(false) 

    return (
        <section className="accordion-card">
            <div className="header" onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>  {/* Removed accidental '=' character */}
                <p className="icon">{isActive ? '-' : '+'}</p>
            </div>

            <div className="content">
                {isActive && <p className="card-info">{content}</p>}
            </div>
        </section>
    )
}
Accordions.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default Accordions
