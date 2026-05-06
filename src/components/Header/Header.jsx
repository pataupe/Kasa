import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {
    return (
        <header className='content-container'>
            <Link to='/'>
            <img src={logo} alt="Kasa" />
            </Link>
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