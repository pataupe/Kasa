import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {
    return (
        <header>
            <img src={logo} alt="Kasa" />
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/a-propos">À propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header