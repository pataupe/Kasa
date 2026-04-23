import './Slideshow.scss';
import { useState } from 'react';
import flecheDroite from '../../assets/images/flechedroite.svg';
import flecheGauche from '../../assets/images/flechegauche.svg';

function Slideshow({pictures}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const goToNext = () => {
        setCurrentIndex((currentIndex + 1) % pictures.length);
    };
    
    const goToPrevious = () => {
        setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length);
    };
    
    if (pictures.length === 1) {
        return (
            <div className="slideshow">
                <img className='slideshow__img'
                src={pictures[0]}
                alt="Slide 1"
                />
            </div>
        );
    }
    
    return (
        <div className="slideshow">
            <img className='slideshow__img'
            src={pictures[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            />
            <button className='slideshow__button slideshow__button--right' onClick={goToNext}>
                <img src={flecheDroite} alt="Suivant" />
            </button>
            <button className='slideshow__button slideshow__button--left' onClick={goToPrevious}>
                <img src={flecheGauche} alt="Précédent" />
            </button>
            <p className='slideshow__counter'>{currentIndex + 1}/{pictures.length}</p>
        </div>
    );
}

export default Slideshow;