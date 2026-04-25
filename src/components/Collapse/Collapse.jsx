import { useState } from 'react'
import './Collapse.scss'
import flecheBas from '../../assets/images/flechebas.svg'

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="collapse">
            <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
                <h2>{title}</h2>
                <img
                    src={flecheBas}
                    alt="Toggle"
                    className={`collapse__arrow ${isOpen ? 'collapse__arrow--open' : ''}`}
                />
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