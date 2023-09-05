import landmarks from '../images/landmarks.png';
import star from '../images/star.png';
import profile from '../images/profile.png';
import pin from '../images/pin.png';
import "./Header.css";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <nav className="nav">
		<div>
		<img src={landmarks} className="logo"></img>
		</div>
        <div>
          <a href="#" className="Geo">
            Geo.
          </a>
        </div>
        <div>
          <ul className="navmenu">
            <li>
              <a href="#" className="navitem">Landmarks</a>
            </li>
            <li>
              <a href="#" className="navitem">Favorites</a>
            </li>
            <li>
              <a href="#" className="navitem">My visited</a>
            </li>
            <li>
              <a href="#" className="navitem">Profile</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
