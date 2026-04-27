import './Footer.scss'
import logoblack from '../../assets/images/logoblack.png'

function Footer() {
    return (
        <footer>
           <img src={logoblack} alt="Kasa" />
           <p>© 2026 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer