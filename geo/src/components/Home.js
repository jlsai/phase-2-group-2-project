import "./Home.css";
import { Link } from "react-router-dom"
import { useRef } from 'react';
import About from "./About";

function Home() {

  const aboutScroll = useRef(null)

	const scrollToSection = (elementRef) => {
		window.scrollTo({
      top: elementRef.current.offsetTop,
			behavior: 'smooth'
		})
	}

  return (
    <div>
      <div className="middle">
        <Link to="/landmarks" className="homeBtn">
          <button className="homeBtn">Get Started.</button>
        </Link>
      </div>

      <div className="scroll">
          <h1 onClick={() => scrollToSection(aboutScroll)}>About us.</h1>
      </div>
      <div className="about" ref={aboutScroll}>
        <About/>
      </div>

    </div>
  )
}

export default Home;
