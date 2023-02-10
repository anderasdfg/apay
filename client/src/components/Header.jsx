import "../styles/Header.css"
import logo from "../assets/logo.svg"
import cart from "../assets/icons/cart.svg"
import user from "../assets/icons/user-profile.svg"
import search from "../assets/icons/search.svg"

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link className="" to="/">
                <img src={logo} alt="Logo" />                
            </Link>                        
            <div className="header__item header__navbar">
                <nav className="navbar">
                    <div className="navbar__title">Productos</div>
                    <div className="navbar__title">Carrito</div>
                    <div className="navbar__title">Nosotros</div>
                </nav>                                   
            </div>
            <div className="header__item">
                <div className="search__wrapper">
                    <input className= "search__input" type="text" />
                    <img src={search} className="search__input-icon" alt="" />
                </div>
                <div>
                    <button className="option__icon">
                       <img src={ user } alt="" />
                    </button>
                    <button className="option__icon">
                        <img src={ cart } alt="" />
                    </button>
                </div>    
            </div>
                    
        </div>
    )
};

export default Header;
