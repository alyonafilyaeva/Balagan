import "./Header.scss"
import balagan from "../../imgs/balagan.png"
import ellipse from "../../imgs/ellipse.svg"
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={ellipse} alt="ellipse" className="header__logo__ellipse"></img>
                <img src={balagan} alt="balagan"></img>
            </div>
            <nav className="header__nav">
                <NavLink to="/events" className="header__nav__link">События</NavLink>
                <NavLink to="/events" className="header__nav__link">Магазин</NavLink>
                <NavLink to="/events" className="header__nav__link">О проекте</NavLink>
                <NavLink to="/events" className="header__nav__link header__nav__link__enter">Войти</NavLink>
            </nav>
        </div>
    );
};

export default Header;