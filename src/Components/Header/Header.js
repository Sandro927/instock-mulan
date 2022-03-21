import './Header.scss';
import logo from '../../assets/logo/InStock-Logo_1x.png';
import { Link, NavLink } from 'react-router-dom';


function Header() {
    return (
        <>
        <div className="header-background"></div>

        <nav className="nav">

            <Link to="/warehouses" className="nav__logo-link" >
                <img src={logo} className="nav__logo" alt="logo" />
            </ Link>

            <div className="nav__page-link">
                <NavLink activeClassName="nav__link-active" to="/warehouse" className="nav__link" >
                    <h3 className="nav__link-title">Warehouses</h3>
                </ NavLink>
                <NavLink activeClassName="nav__link-active" to="/inventory" className="nav__link" >
                    <h3 className="nav__link-title">Inventory</h3>
                </ NavLink>
            </div>

        </nav>
        </>
    )
}

export default Header