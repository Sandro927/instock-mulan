import './Header.scss';
import logo from '../../assets/logo/InStock-Logo_1x.png';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <>
        <div className="header-background"></div>

        <nav className="nav">

            <Link to="/warehouses" className="nav__logo-link" >
                <img src={logo} className="nav__logo" alt="logo" />
            </ Link>

            <div className="nav__page-link">
                <Link to="/warehouses" className="nav__link" >
                    <h3 className="nav__link-title">Warehouses</h3>
                </ Link>
                <Link to="/inventory" className="nav__link" >
                    <h3 className="nav__link-title">Inventory</h3>
                </ Link>
            </div>

        </nav>
        </>
    )
}

export default Header