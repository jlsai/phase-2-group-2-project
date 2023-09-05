import landmarks from '../images/landmarks.png';
import { Link } from "react-router-dom"
import star from '../images/star.png';
import profile from '../images/profile.png';
import pin from '../images/pin.png';
import "./Header.css";

function Header() {
  return (
    <div className="header">
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
			<Link to="/landmarks" className="navitem">Landmarks</Link>
            </li>
            <li>
			<Link to="/Favorites" className="navitem">Favorites</Link>
            </li>
            <li>
			<Link to="/visited" className="navitem">My visited</Link>
            </li>
            <li>
			<Link to="/profile" className="navitem">Profile</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
