import "./Home.css";
import { Link } from "react-router-dom"

function Home() {

  
  return (
    <div>
      <div className="middle">
        <Link to="/landmarks" className="homeBtn">
          <button className="homeBtn">Get Started.</button>
        </Link>
      </div>
    </div>
  )
}

export default Home;
