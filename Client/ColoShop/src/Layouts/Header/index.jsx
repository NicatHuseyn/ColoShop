import "./index.scss";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="top-inner">
            <p>FREE SHIPPING ON ALL U.S ORDERS OVER $50</p>

            <ul>
              <li>USD</li>
              <li>English</li>
              <li>MyAccount</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <div className="bottom-inner">
            <div className="logo">
              COLO<span>SHOP</span>
            </div>

            <nav>
              <ul>
                <li>
                  <NavLink to="/">HOME</NavLink>
                </li>
                <li>
                  <NavLink>SHOP</NavLink>
                </li>
                <li>
                  <NavLink>PROMOTION</NavLink>
                </li>
                <li>
                  <NavLink>PAGES</NavLink>
                </li>
                <li>
                  <NavLink>BLOG</NavLink>
                </li>
                <li>
                  <NavLink>CONTACT</NavLink>
                </li>
              </ul>
            </nav>

            <div className="basket">
              <span>
                <NavLink><FaSearch /></NavLink>
              </span>
              <span>
                <NavLink><FaUser /></NavLink>
              </span>
              <span>
                <NavLink>
                  <FaShoppingCart />
                  </NavLink>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
