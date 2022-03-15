import './Header.scss';
import logo from '../../assets/logo/InStock-Logo_1x.png';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <nav className="nav">

            <Link to="/" className="nav__logo-link" >
                <img src={logo} className="nav__logo" alt="logo" />
            </ Link>

            <div className="nav__page-link">
                <Link to="/" className="nav__link" >
                    <h3 className="nav__link-title">Warehouses</h3>
                </ Link>
                <Link to="/" className="nav__link" >
                    <h3 className="nav__link-title">Inventory</h3>
                </ Link>
            </div>

        </nav>
    )
}

export default Header