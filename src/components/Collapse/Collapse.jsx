import { useState } from 'react'
import './Collapse.scss'

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="collapse">
            <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
                <h2>{title}</h2>
                <i className={`collapse__arrow ${isOpen ? 'collapse__arrow--open' : ''}`}>
                    ▲
                </i>
            </div>
            {isOpen && (
                <div className="collapse__content">
                    {content}
                </div>
            )}
        </div>
    )
}

export default Collapse