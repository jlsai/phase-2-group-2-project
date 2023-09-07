import landmarks from '../images/landmarks.png';
import { Link } from "react-router-dom"
import star from '../images/star.png';
import profile from '../images/profile.png';
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <nav className="nav">
        <div>
          <img src={landmarks} className="logo"></img>
        </div>
        <div>
          <Link to="/" className="Geo">
            Geo.
          </Link>
        </div>
        <div>
          <ul className="navmenu">
            <li>
              <Link to="/landmarks" className="navitem">
                Landmarks
              </Link>
            </li>
            <li>
              <Link to="/Favorites" className="navitem">
                Favorites
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
