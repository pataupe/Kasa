import './Banner.scss'

function Banner({image, text }) {
    return (
        <div className="banner">
            <img src={image} alt="Banner" />
            {text && <h1 className="banner__title">{text}</h1>}
        </div>
    )
}

export default Banner

